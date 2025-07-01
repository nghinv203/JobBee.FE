import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {CandidatesService} from '../../../../../core/services/candidates/candidates.service';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../../../shared/services/auth.service';

@Component({
  selector: 'app-add-resume',
  standalone: true,
  imports: [
    TranslatePipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-resume.component.html',
  styleUrl: './add-resume.component.scss'
})
export class AddResumeComponent {
  @Output() isOpenMessage = new EventEmitter<boolean>();

  isOpen = true;
  isLoading = false;

  uploadForm: FormGroup;
  selectedFile: File | null = null;
  candidateId: string = '';

  constructor(
    private fb: FormBuilder,
    private candidatesService: CandidatesService,
    private notification: NzNotificationService,
    private authService: AuthService
  ) {
    this.uploadForm = this.fb.group({
      resumeName: ['', Validators.required]
    });
    const userId = this.authService.getUserId()!;
    this.candidatesService.getCandidateId(userId).subscribe(res => {
      this.candidateId = res.data.id;
      console.log(this.candidateId)
    });
  }

  closePopUp(): void {
    this.isOpen = false;
    this.isOpenMessage.emit(false);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.uploadForm.invalid || !this.selectedFile) {
      this.notification.error('Lỗi', 'Vui lòng nhập tên hồ sơ và chọn file.');
      return;
    }

    const resumeName = this.uploadForm.get('resumeName')?.value?.trim();
    if (!resumeName) {
      this.notification.error('Lỗi', 'Tên hồ sơ không hợp lệ.');
      return;
    }

    const originalName = this.selectedFile.name;
    const extension = originalName.substring(originalName.lastIndexOf('.'));

    const maxBaseLength = 50 - extension.length;
    const safeBaseName = resumeName.length > maxBaseLength
      ? resumeName.substring(0, maxBaseLength)
      : resumeName;

    const newFileName = safeBaseName + extension;

    const renamedFile = new File([this.selectedFile], newFileName, {
      type: this.selectedFile.type,
    });

    const formData = new FormData();
    formData.append('CandidateId', this.candidateId);
    formData.append('Resume', renamedFile);

    this.isLoading = true;

    this.candidatesService.createCandidateResume(formData).subscribe({
      next: () => {
        this.notification.success('Thành công', 'Tải lên thành công!');
        this.uploadForm.reset();
        this.selectedFile = null;
        this.closePopUp();
      },
      error: () => {
        this.notification.error('Thất bại', 'Không thể tải lên hồ sơ.');
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}

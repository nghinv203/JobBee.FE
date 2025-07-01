import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgForOf} from '@angular/common';
import {Resume, ResumeService} from '../../../core/services/resume/resume.service';
import {JobApplicationRequest, JobApplyService} from '../../../core/services/job-apply/job-apply.service';
import {CandidatesService} from '../../../core/services/candidates/candidates.service';
import {AuthService} from '../../../shared/services/auth.service';
import Swal from 'sweetalert2';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-apply-job',
  standalone: true,
  imports: [
    TranslatePipe,
    NgForOf,
    FormsModule
  ],
  templateUrl: './apply-job.component.html',
  styleUrl: './apply-job.component.scss'
})
export class ApplyJobComponent {
  @Input() jobIdInput!: string;
  @Output() isOpenMessage = new EventEmitter<boolean>();

  isOpen: boolean = true;

  resumes: Resume[] = [];
  selectedResumeId: string = '';
  coverLetter: string = '';


  closePopUp() {
    this.isOpen = false;
    this.isOpenMessage.emit(this.isOpen);
  }

  constructor(private resumeService: ResumeService,
              public jobApplyService: JobApplyService,
              private candidateService: CandidatesService,
              private authService: AuthService) {
  }

  userId!: string | null;
  candidateId: string = '...';

  ngOnInit(): void {
    this.userId = this.authService.getUserId();

    this.candidateService.getCandidateIdByUser(this.userId!).subscribe({
      next: (res) => {
        this.candidateId = res.data.id; // ✅ Extract string here

        console.log(this.candidateId);

        this.resumeService.getResumesByCandidateId(this.candidateId).subscribe({
          next: (data) => this.resumes = data,
          error: (err) => console.error('Error fetching resumes:', err)
        });
      },
      error: (err) => {
        console.error('Failed to get candidate ID:', err);
      }
    });
  }

  onCvSelected(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedResumeId = select.value;
  }

  onCoverLetterChange(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.coverLetter = textarea.value;
  }

  submitForm(): void {
    const application: JobApplicationRequest = {
      jobId: this.jobIdInput,
      candidateId: this.candidateId,
      resumeId: this.selectedResumeId,
      coverLetter: this.coverLetter,
      status: 'Pending', // Or your default status
      employerNotes: 'strings'
    };

    console.log('Sending application:', application);
    this.jobApplyService.submitApplication(application).subscribe({
      next: (res) => {
        console.log('Success:', res);
        Swal.fire({
          icon: 'success',
          title: 'Ứng tuyển thành công!',
          text: 'Hồ sơ của bạn đã được gửi đến nhà tuyển dụng.',
          confirmButtonText: 'Đóng'
        });
        this.closePopUp()
      },
      error: (err) => {
        console.error('Error submitting application:', err);
        Swal.fire({
          icon: 'error',
          title: 'Lỗi!',
          text: 'Công việc đã ứng tuyển. Vui lòng thử lại sau.',
          confirmButtonText: 'Thử lại'
        });
        this.closePopUp()
      }
    });
  }
}

import { Component } from '@angular/core';
import {AddResumeComponent} from './add-resume/add-resume.component';
import {TranslatePipe} from '@ngx-translate/core';
import {AuthService} from '../../../../shared/services/auth.service';
import {JobAlertService} from '../../../../core/services/job-alert/job-alert.service';
import {CandidatesService} from '../../../../core/services/candidates/candidates.service';
import {JobApplyService} from '../../../../core/services/job-apply/job-apply.service';
import {SaveJobService} from '../../../../core/services/save-job/save-job.service';
import {Resume, ResumeService} from '../../../../core/services/resume/resume.service';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setting-personal',
  standalone: true,
  imports: [AddResumeComponent, TranslatePipe, NgForOf, FormsModule, NgIf],
  templateUrl: './setting-personal.component.html',
  styleUrl: './setting-personal.component.scss'
})
export class SettingPersonalComponent {

  constructor(public authService: AuthService,
              private candidateService: CandidatesService,
              private resumeService: ResumeService,) {
  }

  isAddResume: boolean = false;
  userId!: string | null;
  candidateId: string = '...';
  resumes: Resume[] = [];

  firstName = '';
  lastName = '';
  dob: string = '';
  gender = '';

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    if (!this.userId) {
      console.error("No user ID found.");
      return;
    }

    this.candidateService.getCandidateIdByUser(this.userId).subscribe({
      next: (res) => {
        this.candidateId = res.data.id;
        this.loadResumes()
        this.loadCandidate()
      },
      error: (err) => {
        console.error('Failed to get candidate ID:', err);
      }
    });
  }



  loadResumes(): void {
    this.resumeService.getByCandidateId(this.candidateId).subscribe(res => {
      this.resumes = res.data;
    });
  }

  getReadableSize(sizeInMB: number): string {
    return `${sizeInMB.toFixed(1)} MB`;
  }

  openAddResume() {
    this.isAddResume = true;
    console.log('OpenAddResume');
  }

  handlePopUp(isOpen: boolean) {
    this.isAddResume = isOpen;
  }

  loadCandidate() {
    this.candidateService.getCandidateById(this.candidateId).subscribe(response => {
      const data = response.data;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.dob = data.birthDate ? new Date(data.birthDate).toISOString().substring(0, 10) : '';
      this.gender = data.gender;
      this.profilePictureUrl = data.profilePicture; // Load image URL
    });
  }

  saveBasicInfo() {
    this.userId = this.authService.getUserId();
    if (!this.userId) {
      console.error("No user ID found.");
      return;
    }

    const birthDateEpoch = this.dob
      ? Math.floor(new Date(this.dob + 'T00:00:00Z').getTime() / 1000)
      : 0;

    this.candidateService.getCandidateIdByUser(this.userId).subscribe({
      next: (res) => {
        this.candidateId = res.data.id;
        console.log(birthDateEpoch)
        this.candidateService.updateBasicInfo({
          id: this.candidateId,
          firstName: this.firstName,
          lastName: this.lastName,
          birthDate: birthDateEpoch,
          gender: this.gender
        }).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: 'Cập nhật thành công',
              text: 'Thông tin cá nhân đã được lưu.',
              timer: 2000,
              showConfirmButton: false
            });
          },
          error: () => {
            Swal.fire({
              icon: 'error',
              title: 'Lỗi',
              text: 'Không thể cập nhật thông tin. Vui lòng thử lại.',
            });
          }
        });
      },
      error: (err) => {
        console.error('Failed to get candidate ID:', err);
      }
    });
  }

  // profile.component.ts
  selectedPicture!: File;
  profilePictureUrl: string = ''; // URL to display

  onPictureSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedPicture = input.files[0];

      // Preview the selected image
      const reader = new FileReader();
      reader.onload = () => this.profilePictureUrl = reader.result as string;
      reader.readAsDataURL(this.selectedPicture);

      // Auto-upload
      this.uploadProfilePicture();
    }
  }

  uploadProfilePicture() {
    this.userId = this.authService.getUserId();
    if (!this.userId) {
      console.error("No user ID found.");
      return;
    }

    this.candidateService.getCandidateIdByUser(this.userId).subscribe({
      next: (res) => {
        this.candidateId = res.data.id;
        console.log(this.candidateId);
        console.log(this.selectedPicture);
        this.candidateService.uploadProfilePicture(this.candidateId, this.selectedPicture).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: 'Tải ảnh thành công',
              timer: 2000,
              showConfirmButton: false
            });
          },
          error: (err) => {
            console.error('Upload failed:', err.error || err);
            Swal.fire({
              icon: 'error',
              title: 'Lỗi',
              text: err?.error?.message || 'Không thể tải ảnh lên. Vui lòng thử lại.',
            });
          }
        });
      },
      error: (err) => {
        console.error('Failed to get candidate ID:', err);
      }
    });
  }


}


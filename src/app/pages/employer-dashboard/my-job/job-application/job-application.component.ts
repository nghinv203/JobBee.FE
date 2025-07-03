import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {JobApplyService} from '../../../../core/services/job-apply/job-apply.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {Resume, ResumeService} from '../../../../core/services/resume/resume.service';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [
    TranslatePipe,
    NgForOf,
    NgIf,
    DatePipe
  ],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.scss'
})
export class JobApplicationComponent {
  @Output() isAppication = new EventEmitter<boolean>();


  emitMessage() {
    this.isAppication.emit(false);
  }

  applications: any[] = [];
  @Input() jobId!: string

  constructor(private jobAppService: JobApplyService,
              private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.jobAppService.getApplicationsByJobId(this.jobId).subscribe({
      next: (res) => {
        console.log(this.jobId)
        this.applications = res.data.items;
        console.log(this.applications);
      },
      error: (err) => {
        console.error('Failed to fetch applications:', err);
      }
    });
  }

  getInitials(name: string): string {
    const parts = name.split(' ');
    return parts.map(p => p[0]).join('').toUpperCase();
  }

  // onWatchVideo(candidateId: string): void {
  //   this.resumeService.getResumesByCandidateId(candidateId).subscribe({
  //     next: (resumes: Resume[]) => {
  //       const video = resumes.find(r => r.fileType === 'video/mp4');
  //       if (video) {
  //         window.open(video.filePath, '_blank');
  //       } else {
  //         alert('This candidate has not uploaded a video resume.');
  //       }
  //     },
  //     error: () => {
  //       alert('Failed to fetch resumes for this candidate.');
  //     }
  //   });
  // }

  videoUrl: string | null = null;
  showModal: boolean = false;

  onWatchVideo(candidateId: string): void {
    this.resumeService.getResumesByCandidateId(candidateId).subscribe({
      next: (resumes: Resume[]) => {
        const video = resumes.find(r => r.fileType === 'video/mp4');
        if (video) {
          this.videoUrl = video.filePath;
          this.showModal = true;
        } else {
          alert('This candidate has not uploaded a video resume.');
        }
      },
      error: () => {
        alert('Failed to fetch resumes for this candidate.');
      }
    });
  }

  closeModal(): void {
    this.showModal = false;
    this.videoUrl = null;
  }


}

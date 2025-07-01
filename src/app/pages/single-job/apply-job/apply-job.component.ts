import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgForOf} from '@angular/common';
import {Resume, ResumeService} from '../../../core/services/resume/resume.service';
import {JobApplicationRequest, JobApplyService} from '../../../core/services/job-apply/job-apply.service';

@Component({
  selector: 'app-apply-job',
  standalone: true,
  imports: [
    TranslatePipe,
    NgForOf
  ],
  templateUrl: './apply-job.component.html',
  styleUrl: './apply-job.component.scss'
})
export class ApplyJobComponent {

  @Output() isOpenMessage = new EventEmitter<boolean>();

  isOpen: boolean = true;

  resumes: Resume[] = [];
  selectedResumeId: string = '';
  coverLetter: string = '';
  jobId: string = '...'; // get from route or parent input
  candidateId: string = '...'; // get from auth or parent input

  closePopUp() {
    this.isOpen = false;
    this.isOpenMessage.emit(this.isOpen);
  }

  constructor(private resumeService: ResumeService,
              private jobApplyService: JobApplyService) {}

  ngOnInit(): void {
    const candidateId = '809edc74-095f-481d-9fe3-4c43f86dcd8d';
    this.resumeService.getResumesByCandidateId(candidateId).subscribe({
      next: (data) => this.resumes = data,
      error: (err) => console.error('Error fetching resumes:', err)
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
      jobId: this.jobId,
      candidateId: this.candidateId,
      resumeId: this.selectedResumeId,
      coverLetter: this.coverLetter,
      status: 'Pending', // Or your default status
      employerNotes: ''
    };

    this.jobApplyService.submitApplication(application).subscribe({
      next: (res) => {
        console.log('Application submitted successfully', res);
        // optionally close modal or show success toast
      },
      error: (err) => {
        console.error('Application submission failed', err);
      }
    });
  }

}

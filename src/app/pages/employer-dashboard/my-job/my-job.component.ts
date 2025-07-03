import { Component } from '@angular/core';
import {JobApplicationComponent} from './job-application/job-application.component';
import {TranslatePipe} from '@ngx-translate/core';
import {JobsService} from '../../../core/services/jobs/jobs.service';
import {EmployerListService} from '../../../core/services/employer-list/employer-list.service';
import {AuthService} from '../../../shared/services/auth.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-my-job',
  standalone: true,
  imports: [JobApplicationComponent, TranslatePipe, NgIf, NgForOf],
  templateUrl: './my-job.component.html',
  styleUrl: './my-job.component.scss'
})
export class MyJobComponent {
  isJobApplication = false;
  jobId: string = '';

  OpenJobApplication(jobIdInput: string) {
    this.isJobApplication = true;
    this.jobId = jobIdInput;
  }

  isOpenApplication(isOpen: boolean) {
    this.isJobApplication = isOpen;
  }

  jobs: any[] = [];
  userId: string | null = '';
  employerId: string = '';

  constructor(
    private jobService: JobsService,
    private employerService: EmployerListService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId(); // replace with actual logic
    this.loadEmployerAndJobs();
  }

  loadEmployerAndJobs(): void {
    this.employerService.getEmployerId(this.userId!).subscribe({
      next: (res) => {
        this.employerId = res.data;
        this.loadPostedJobs();
      },
      error: (err) => {
        console.error('Failed to get employer ID:', err);
      }
    });
  }

  loadPostedJobs(): void {
    this.jobService.getPostedJobs(this.employerId).subscribe({
      next: (res) => {
        this.jobs = res.data.items;
      },
      error: (err) => {
        console.error('Failed to load posted jobs:', err);
      }
    });
  }

}

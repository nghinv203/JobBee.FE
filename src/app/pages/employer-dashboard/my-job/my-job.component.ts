import {Component, OnInit} from '@angular/core';
import {JobApplicationComponent} from './job-application/job-application.component';
import {TranslatePipe} from '@ngx-translate/core';
import {JobsService} from '../../../core/services/jobs/jobs.service';
import {EmployerListService} from '../../../core/services/employer-list/employer-list.service';
import {AuthService} from '../../../shared/services/auth.service';
import {NgForOf, NgIf} from '@angular/common';
import {LoadingComponent} from '../../../shared/reuseComponents/loading/loading.component';
import {finalize} from 'rxjs';
import {PaginatorComponent} from '../../../shared/reuseComponents/paginator/paginator.component';

@Component({
  selector: 'app-my-job',
  standalone: true,
  imports: [JobApplicationComponent, TranslatePipe, NgIf, NgForOf, LoadingComponent, PaginatorComponent],
  templateUrl: './my-job.component.html',
  styleUrl: './my-job.component.scss'
})
export class MyJobComponent implements OnInit{
  isJobApplication = false;
  jobId: string = '';
  loading = false;

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
  totalPage: number = 0;

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

    this.loading = true;

    this.employerService.getEmployerId(this.userId!)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe({
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
    this.getJobs();
  }

  hanldeChangePage(page: number) {
    this.getJobs(page)
  }

  getJobs(page = 1) {
    this.loading = true;
    this.jobService.getPostedJobs({employerId: this.employerId, isActive: true, page: page, pageSize: 10})
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (res) => {
          this.jobs = res.data.items;
          this.totalPage = res.data.totalPages;
        },
        error: (err) => {
          console.error('Failed to load posted jobs:', err);
        }
      });
  }
}

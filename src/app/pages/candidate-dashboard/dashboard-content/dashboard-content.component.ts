import { Component } from '@angular/core';
import {DatePipe, DecimalPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {AuthService} from '../../../shared/services/auth.service';
import {JobAlertService} from '../../../core/services/job-alert/job-alert.service';
import {CandidatesService} from '../../../core/services/candidates/candidates.service';
import {JobsService} from '../../../core/services/jobs/jobs.service';
import {JobApplyService} from '../../../core/services/job-apply/job-apply.service';
import {SaveJobService} from '../../../core/services/save-job/save-job.service';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [
    NgClass,
    TranslatePipe,
    DatePipe,
    DecimalPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss'
})
export class DashboardContentComponent {
  constructor(public authService: AuthService,
              private jobAlertService: JobAlertService,
              private candidateService: CandidatesService,
              private jobApplyService: JobApplyService,
              private savedJobService: SaveJobService) {
  }

  applications: any[] = [];
  userId!: string | null;
  email: string | null = '';
  candidateId: string = '...';
  totalCountJobAlert = 0;
  totalCountJobApply = 0;
  totalCountSavedJob = 0;
  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.email = this.authService.getEmail();
    this.userId = this.authService.getUserId();
    if (!this.userId) {
      console.error("No user ID found.");
      return;
    }

    this.candidateService.getCandidateIdByUser(this.userId).subscribe({
      next: (res) => {
        this.candidateId = res.data.id;
        this.loadApplications();
        this.loadApplicationsAppliedJob()
        this.loadApplicationsSavedJob()
      },
      error: (err) => {
        console.error('Failed to get candidate ID:', err);
      }
    });

  }

  loadApplications(): void {
    this.jobAlertService.getJobAlertByCandidateId(this.candidateId, this.currentPage, this.pageSize)
      .subscribe(response => {
        this.totalCountJobAlert = response.data.totalItems;
        console.log(this.totalCountJobAlert)
      });
  }

  loadApplicationsAppliedJob(): void {
    this.jobApplyService.getApplicationsByCandidateId(this.candidateId, this.currentPage, this.pageSize)
      .subscribe(response => {
        this.applications = response.data.items;
        this.totalCountJobApply = response.data.totalItems;
        console.log(this.totalCountJobApply)
      });
  }

  loadApplicationsSavedJob(): void {
    this.savedJobService.getSavedJobByCandidateId(this.candidateId, this.currentPage, this.pageSize)
      .subscribe(response => {
        this.totalCountSavedJob = response.data.totalItems;
        console.log(this.totalCountSavedJob)
      });
  }

  handleViewJobDetail(jobId: string) {
    window.open(`/jobs/detail/${jobId}`, '_blank');
  }

}

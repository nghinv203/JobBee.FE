import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {JobApplyService} from '../../../core/services/job-apply/job-apply.service';
import {DatePipe, DecimalPipe, NgForOf, NgIf, SlicePipe} from '@angular/common';
import {CandidatesService} from '../../../core/services/candidates/candidates.service';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-apllied-job',
  standalone: true,
  imports: [
    TranslatePipe,
    NgForOf,
    DatePipe,
    SlicePipe,
    DecimalPipe,
    NgIf
  ],
  templateUrl: './apllied-job.component.html',
  styleUrl: './apllied-job.component.scss'
})
export class AplliedJobComponent {
  applications: any[] = [];
  totalCount = 0;
  currentPage = 1;
  pageSize = 5;
  totalPages: number = 0;
  pages: number[] = [];

  constructor(private jobService: JobApplyService,
              private candidateService: CandidatesService,
              private authService: AuthService) {
  }

  userId!: string | null;
  candidateId: string = '...';

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    if (!this.userId) {
      console.error("No user ID found.");
      return;
    }

    this.candidateService.getCandidateIdByUser(this.userId).subscribe({
      next: (res) => {
        this.candidateId = res.data.id;
        console.log('Resolved candidateId:', this.candidateId);
        console.log(this.currentPage);
        console.log(this.pageSize);
        this.loadApplications();
      },
      error: (err) => {
        console.error('Failed to get candidate ID:', err);
      }
    });
  }


  loadApplications(): void {
    this.jobService.getApplicationsByCandidateId(this.candidateId, this.currentPage, this.pageSize)
      .subscribe(response => {
        this.applications = response.data.items;
        this.totalCount = response.data.totalItems;
        this.totalPages = Math.ceil(this.totalCount / this.pageSize);
        this.generatePages();
      });
  }

  generatePages(): void {
    this.pages = [];
    const maxVisible = 10;
    if (this.totalPages <= maxVisible) {
      // Show all pages
      for (let i = 1; i <= this.totalPages; i++) {
        this.pages.push(i);
      }
      return;
    }

    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    // Ensure end doesn't exceed totalPages
    if (end > this.totalPages) {
      end = this.totalPages;
      start = Math.max(1, end - maxVisible + 1); // Shift window back
    }

    for (let i = start; i <= end; i++) {
      this.pages.push(i);
    }
  }



  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    this.loadApplications();
  }

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  handleViewJobDetail(jobId: string) {
    window.open(`/jobs/detail/${jobId}`, '_blank');
  }

}

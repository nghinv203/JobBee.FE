import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {JobsService} from '../../core/services/jobs/jobs.service';
import {finalize} from 'rxjs';
import {IJobDetail} from '../../shared/models/common';
import {DatePipe, JsonPipe} from '@angular/common';
import {TruncatePipe} from '../../shared/pipes/truncate/truncate.pipe';
import {NzTooltipDirective} from 'ng-zorro-antd/tooltip';
import {ShortNumberPipe} from '../../shared/pipes/short-number/short-number.pipe';
import {JobListComponent} from '../job-list/job-list.component';
import {JobComponent} from '../entities/job/job/job.component';
import {IJob} from '../entities/job/job.model';
import {FooterComponent} from '../../layout/main/footer/footer.component';
import {LoadingComponent} from '../../shared/reuseComponents/loading/loading.component';
import {ApplyJobComponent} from './apply-job/apply-job.component';
import {CandidatesService} from '../../core/services/candidates/candidates.service';

@Component({
  selector: 'app-single-job',
  imports: [
    JsonPipe,
    TruncatePipe,
    NzTooltipDirective,
    RouterLink,
    DatePipe,
    ShortNumberPipe,
    JobListComponent,
    JobComponent,
    FooterComponent,
    LoadingComponent,
    ApplyJobComponent
  ],
  standalone: true,
  templateUrl: './single-job.component.html',
  styleUrl: './single-job.component.scss'
})
export class SingleJobComponent implements OnInit{

  job!: IJobDetail;
  isLoading = true;
  jobs!: IJob[];
  isOpenApply = false;
  jobId: string | null = '';

  constructor(private route: ActivatedRoute,
              private jobService: JobsService) {
  }

  ngOnInit() {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.jobId = id;
    this.jobService.getJobDetail(id!)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
        this.job = res.data;
      })
    this.isLoading = true;
    this.jobService.getJobs({})
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
        this.jobs = (res.data as any).items;
      })
  }

  viewCompanyDetail(id: string): void {
    window.open(`/single-employer/${id}`, '_blank', 'noopener,noreferrer');
  }

  onOpenApply() {
    this.isOpenApply = true;
  }

  handlePopUp(isOpen: boolean) {
    this.isOpenApply = isOpen;
  }
}

import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';
import {TranslatePipe} from '@ngx-translate/core';
import {IJob, JobType} from '../../entities/job/job.model';
import {JobLongComponent} from '../../entities/job/job-long/job-long.component';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {RouterLink} from "@angular/router";
import {IJobSearch} from '../../job-list/job-list.model';
import {JobsService} from '../../../core/services/jobs/jobs.service';

@Component({
  selector: 'app-feature-jobs',
    imports: [
        ButtonComponent,
        TranslatePipe,
        JobLongComponent,
        NzButtonComponent,
        RouterLink
    ],
  standalone: true,
  templateUrl: './feature-jobs.component.html',
  styleUrl: './feature-jobs.component.scss'
})
export class FeatureJobsComponent implements OnInit{
  jobs: IJob[] = [];

  params: IJobSearch = {
    is_featured: true
  };

  constructor(private jobService: JobsService) {
  }

  ngOnInit(): void {
    const param = {...this.params , page: 1, pageSize: 6}
    this.jobService.getJobs(param).subscribe(res => {
      this.jobs = (res.data as any).items;
    });
  }
}

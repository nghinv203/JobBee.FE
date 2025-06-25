import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {BreadcrumbComponent} from '../../shared/reuseComponents/breadcrumb/breadcrumb.component';
import {JobSearchComponent} from './job-search/job-search.component';
import {JobsService} from "../../core/services/jobs/jobs.service";
import {IJob} from "../entities/job/job.model";
import {IJobSearch} from './job-list.model';

@Component({
  selector: 'app-jobs',
  imports: [
    TranslatePipe,
    BreadcrumbComponent,
    JobSearchComponent
  ],
  standalone: true,
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit{

  jobs: IJob[] = [];
  searchParams: IJobSearch = {
    keyword: ''
  };

  constructor(private jobListService: JobsService) {
  }

  ngOnInit(): void {
    this.jobListService.getJobs(this.searchParams).subscribe(res => {
      this.jobs = res.data ?? [];
    });
  }

  handleSearch(event: any) {
    console.log(event);
  }
}

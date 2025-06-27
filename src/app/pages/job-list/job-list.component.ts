import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {BreadcrumbComponent} from '../../shared/reuseComponents/breadcrumb/breadcrumb.component';
import {JobSearchComponent} from './job-search/job-search.component';
import {JobsService} from "../../core/services/jobs/jobs.service";
import {IJob} from "../entities/job/job.model";
import {IJobSearch} from './job-list.model';
import {JobComponent} from '../entities/job/job/job.component';
import {finalize} from 'rxjs';
import {LoadingComponent} from '../../shared/reuseComponents/loading/loading.component';

@Component({
  selector: 'app-jobs',
  imports: [
    TranslatePipe,
    BreadcrumbComponent,
    JobSearchComponent,
    JobComponent,
    LoadingComponent
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
  isLoading: boolean = false;

  constructor(private jobListService: JobsService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.jobListService.getJobs(this.searchParams)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
      this.jobs = (res.data as any).items ?? [];
    });
  }

  handleSearch(event: any) {
    console.log(event);
  }
}

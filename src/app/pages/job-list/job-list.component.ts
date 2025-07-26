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
import {PaginatorComponent} from '../../shared/reuseComponents/paginator/paginator.component';

@Component({
  selector: 'app-jobs',
  imports: [
    TranslatePipe,
    BreadcrumbComponent,
    JobSearchComponent,
    JobComponent,
    LoadingComponent,
    PaginatorComponent
  ],
  standalone: true,
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit{

  jobs: IJob[] = [];
  searchParams: any = {
    keyword: ''
  };
  isLoading: boolean = false;
  isGrid = true;
  totalPages = 0;

  constructor(private jobListService: JobsService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.jobListService.getJobs(this.searchParams)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
      this.jobs = (res.data as any).items ?? [];
      debugger
      this.totalPages = (res.data as any).totalPages;
      });
  }

  handleSearch(event: any) {
    console.log(event)
    this.isLoading = true;
    const payload = {
      keyword: event.keyword ?? '',
      location: event.location?.[0]?.name,
      page: event.page ?? 0,
      pageSize: event.pageSize ?? 15
    }
    console.log(payload)
    this.jobListService.getJobs(payload)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
        this.jobs = (res.data as any).items ?? [];
        this.totalPages = (res.data as any).totalPages;
      });
  }

  handleSwitchView(isGrid: boolean) {
    this.isGrid = isGrid;
  }

  handlePaging(page: number) {
    this.searchParams.page = page-1;
    this.handleSearch(this.searchParams)
  }
}

import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {BreadcrumbComponent} from '../../shared/reuseComponents/breadcrumb/breadcrumb.component';
import {JobSearchComponent} from './job-search/job-search.component';
import {JobListService} from "./job-list.service";
import {IJob} from "../entities/job/job.model";

@Component({
  selector: 'app-job-list',
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

  constructor(private jobListService: JobListService) {
  }

  ngOnInit(): void {
    this.jobListService.getJobs('').subscribe(res => {
      this.jobs = res.data ?? [];
    });
  }

  handleSearch(event: any) {
    console.log(event);
  }
}

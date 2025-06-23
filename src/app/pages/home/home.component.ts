import {Component, OnInit} from '@angular/core';
import {JobBannerComponent} from './job-banner/job-banner.component';
import {CommonPositionComponent} from './common-position/common-position.component';
import {WorkflowComponent} from './workflow/workflow.component';
import {PopularJobsComponent} from './popular-jobs/popular-jobs.component';
import {FeatureJobsComponent} from './feature-jobs/feature-jobs.component';
import {TopCompaniesComponent} from './top-companies/top-companies.component';
import {UserReviewsComponent} from './user-reviews/user-reviews.component';
import {CallRegisterComponent} from './call-register/call-register.component';
import {JobListService} from '../../core/services/job-list/job-list.service';
import {IJobSearch} from '../job-list/job-list.model';

@Component({
  selector: 'app-home',
  imports: [
    JobBannerComponent,
    CommonPositionComponent,
    WorkflowComponent,
    PopularJobsComponent,
    FeatureJobsComponent,
    TopCompaniesComponent,
    UserReviewsComponent,
    CallRegisterComponent
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  params: IJobSearch = {
    keyword: 'Giáo viên'
  };

  constructor(private jobService: JobListService) {
  }

  ngOnInit(): void {
    this.jobService.getJobs(this.params).subscribe(res => {

    });
  }

}

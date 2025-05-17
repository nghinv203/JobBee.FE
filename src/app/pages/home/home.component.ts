import { Component } from '@angular/core';
import {JobBannerComponent} from './job-banner/job-banner.component';
import {CommonPositionComponent} from './common-position/common-position.component';
import {WorkflowComponent} from './workflow/workflow.component';
import {PopularJobsComponent} from './popular-jobs/popular-jobs.component';
import {FeatureJobsComponent} from './feature-jobs/feature-jobs.component';
import {TopCompaniesComponent} from './top-companies/top-companies.component';
import {UserReviewsComponent} from './user-reviews/user-reviews.component';
import {CallRegisterComponent} from './call-register/call-register.component';

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
export class HomeComponent {

}

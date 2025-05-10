import { Component } from '@angular/core';
import {JobBannerComponent} from './job-banner/job-banner.component';
import {CommonPositionComponent} from './common-position/common-position.component';
import {WorkflowComponent} from './workflow/workflow.component';
import {PopularJobsComponent} from './popular-jobs/popular-jobs.component';

@Component({
  selector: 'app-home',
  imports: [
    JobBannerComponent,
    CommonPositionComponent,
    WorkflowComponent,
    PopularJobsComponent
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

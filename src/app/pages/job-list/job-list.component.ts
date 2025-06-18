import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {BreadcrumbComponent} from '../../shared/reuseComponents/breadcrumb/breadcrumb.component';
import {JobSearchComponent} from './job-search/job-search.component';

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
export class JobListComponent {
  constructor() {
  }


}

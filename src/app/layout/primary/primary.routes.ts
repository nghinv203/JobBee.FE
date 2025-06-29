import { Routes } from '@angular/router';
import {JobListComponent} from '../../pages/job-list/job-list.component';
import {SingleJobComponent} from '../../pages/single-job/single-job.component';

export const primaryRoutes: Routes = [
  {
    path: '',
    component: JobListComponent,
    data: { breadcrumb: 'breadcrumb.findJob' }
  },
  {
    path: 'detail/:id',
    component: SingleJobComponent
  }
];

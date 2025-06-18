import { Routes } from '@angular/router';
import {JobListComponent} from '../../pages/job-list/job-list.component';

export const primaryRoutes: Routes = [
  {
    path: '',
    component: JobListComponent,
    data: { breadcrumb: 'breadcrumb.findJob' }
  }
];

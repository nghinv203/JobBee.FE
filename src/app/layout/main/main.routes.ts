import { Routes } from '@angular/router';
import {HomeComponent} from '../../pages/home/home.component';
import {ErrorComponent} from '../error/error.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { breadcrumb: 'breadcrumb.home' }
  }
];

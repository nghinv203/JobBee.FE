import { Routes } from '@angular/router';
import {authRoutes} from './layout/auth/auth.routes';
import {AuthComponent} from './layout/auth/auth.component';
import {MainComponent} from './layout/main/main.component';
import {mainRoutes} from './layout/main/main.routes';
import {PrimaryComponent} from './layout/primary/primary.component';
import {primaryRoutes} from './layout/primary/primary.routes';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: mainRoutes,
    data: { breadcrumb: 'breadcrumb.home' }
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: authRoutes
  },
  {
    path: 'jobs',
    component: PrimaryComponent,
    children: primaryRoutes
  }
];

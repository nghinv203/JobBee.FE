import { Routes } from '@angular/router';
import {authRoutes} from './layout/auth/auth.routes';
import {AuthComponent} from './layout/auth/auth.component';
import {MainComponent} from './layout/main/main.component';
import {mainRoutes} from './layout/main/main.routes';
import {PrimaryComponent} from './layout/primary/primary.component';
import {primaryRoutes} from './layout/primary/primary.routes';
import {CandidateDashboardComponent} from './pages/candidate-dashboard/candidate-dashboard.component';
import {EmployerSetupComponent} from './pages/employer-setup/employer-setup.component';
import {EmployerDashboardComponent} from './pages/employer-dashboard/employer-dashboard.component';
import {CandidateListComponent} from './pages/candidate-list/candidate-list.component';
import {EmployerListComponent} from './pages/employer-list/employer-list.component';

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
  },
  {
    path: 'candidate-dashboard',
    component: CandidateDashboardComponent,
  },
  {
    path: 'employer-setup',
    component: EmployerSetupComponent
  },
  {
    path: 'employer-dashboard',
    component: EmployerDashboardComponent,
  },
  {
    path: 'candidate-list',
    component: CandidateListComponent,
  },
  {
    path: 'employer-list',
    component: EmployerListComponent,
  }
];

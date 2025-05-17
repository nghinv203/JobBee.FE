import { Routes } from '@angular/router';
import {authRoutes} from './layout/auth/auth.routes';
import {AuthComponent} from './layout/auth/auth.component';
import {MainComponent} from './layout/main/main.component';
import {mainRoutes} from './layout/main/main.routes';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: mainRoutes
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: authRoutes
  }
];

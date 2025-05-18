import { Routes } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {EmailVerificationComponent} from './email-verification/email-verification.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

export const authRoutes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'email-verification',
    component: EmailVerificationComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  }
];

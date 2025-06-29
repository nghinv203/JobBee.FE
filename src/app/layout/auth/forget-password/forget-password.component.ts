import { Component } from '@angular/core';
import {BaseSignComponent} from '../base-sign/base-sign.component';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {TranslatePipe} from '@ngx-translate/core';
import {Router, RouterLink} from '@angular/router';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import Swal from 'sweetalert2';
import {ResetPasswordEmailComponent} from './reset-password-email/reset-password-email.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-forget-password',
  imports: [
    BaseSignComponent,
    NzButtonComponent,
    TranslatePipe,
    RouterLink,
    NzInputDirective,
    FormsModule,
    ResetPasswordEmailComponent,
    NgIf
  ],
  standalone: true,
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  showResetEmail: boolean = false;
  email: string = '';

  constructor(private authService: AuthService,
              private router: Router) {

  }

  onSubmit(): void {
    if (!this.email) {
      Swal.fire('Error', 'Please enter your email.', 'error');
      return;
    }

    this.authService.forgetPassword(this.email).subscribe({
      next: () => {
        this.showResetEmail = true;
      },
      error: (err) => {
        Swal.fire('Failed', 'Could not send reset link.', 'error');
        console.error(err);
      }
    });
  }

}

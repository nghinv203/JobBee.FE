import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import Swal from 'sweetalert2';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-reset-password',
  imports: [
    RouterLink,
    TranslatePipe,
    NzButtonComponent,
    NzInputDirective,
    FormsModule,
    NzIconModule
  ],
  standalone: true,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  token: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordVisible = false;
  cfPasswordVisible = false;

  constructor(private route: ActivatedRoute,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'] || '';
      this.email = params['email'] || '';
    });
  }

  changePassword(): void {
    if (!this.password || !this.confirmPassword) {
      Swal.fire('Error', 'Please fill in all fields.', 'error');
      return;
    }

    if (this.password !== this.confirmPassword) {
      Swal.fire('Error', 'Passwords do not match.', 'error');
      return;
    }

    const payload = {
      token: this.token.replace(/ /g, '+'),
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    this.authService.resetPassword(payload).subscribe({
      next: () => {
        console.log(payload);
        Swal.fire('Success', 'Password has been changed.', 'success');
        location.href="";
      },
      error: () => {
        console.log(payload);
        Swal.fire('Error', 'Failed to reset password.', 'error');
      }
    });
  }
}

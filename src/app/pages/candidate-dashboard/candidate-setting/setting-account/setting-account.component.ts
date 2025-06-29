import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {AuthService} from '../../../../shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setting-account',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './setting-account.component.html',
  styleUrl: './setting-account.component.scss'
})
export class SettingAccountComponent {
  oldPassword: string = '';
  password: string = '';
  confirmPassword: string = '';
  email: string = '';

  // password visibility toggles
  showCurrent = false;
  showNew = false;
  showConfirm = false;

  constructor(private authService: AuthService) {
    const user = this.authService.getUserInfo();
    if (user?.email) {
      this.email = user.email;
    }
  }

  onChangePassword(): void {
    if (this.password !== this.confirmPassword) {
      Swal.fire('Error', 'New passwords do not match.', 'error');
      return;
    }

    const payload = {
      email: this.email,
      oldPassword: this.oldPassword,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    this.authService.changePassword(payload).subscribe({
      next: () => Swal.fire('Success', 'Password changed successfully.', 'success'),
      error: () => Swal.fire('Error', 'Failed to change password.', 'error')
    });
  }
}

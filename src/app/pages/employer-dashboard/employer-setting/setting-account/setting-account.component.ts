import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../../../shared/services/auth.service';
import Swal from 'sweetalert2';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-setting-account',
  imports: [
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './setting-account.component.html',
  standalone: true,
  styleUrl: './setting-account.component.scss'
})
export class SettingAccountComponent {
  email: string = ''; // Get this from logged-in user info
  oldPassword: string = '';
  password: string = '';
  confirmPassword: string = '';

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

  togglePassword(inputId: string): void {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
    }
  }
}

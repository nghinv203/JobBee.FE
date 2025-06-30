import {Component, Input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {TranslatePipe} from '@ngx-translate/core';
import {Router, RouterLink} from '@angular/router';
import Swal from 'sweetalert2';
import {AuthService} from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-reset-password-email',
  standalone: true,
  imports: [
    FormsModule,
    NzButtonComponent,
    NzInputDirective,
    ReactiveFormsModule,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './reset-password-email.component.html',
  styleUrl: './reset-password-email.component.scss'
})
export class ResetPasswordEmailComponent {

  @Input() email: string = '';

  constructor(private authService: AuthService,
              private router: Router) {

  }

  resendEmail() {
    if (!this.email) {
      Swal.fire('Error', 'Email is missing.', 'error');
      return;
    }

    this.authService.forgetPassword(this.email).subscribe({
      next: () => {
        Swal.fire('Sent!', 'Reset email has been resent.', 'success');
      },
      error: () => {
        Swal.fire('Error', 'Could not resend the email.', 'error');
      }
    });
  }
}

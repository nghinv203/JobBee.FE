import { Component } from '@angular/core';
import {BaseSignComponent} from '../base-sign/base-sign.component';
import {TranslatePipe} from '@ngx-translate/core';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {NzCheckboxComponent} from 'ng-zorro-antd/checkbox';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../../core/services/auth/auth.service';
import {IRegisterUser} from '../user.model';

@Component({
  selector: 'app-sign-up',
  imports: [
    BaseSignComponent,
    TranslatePipe,
    NzSelectComponent,
    NzOptionComponent,
    NzCheckboxComponent,
    NzInputDirective,
    NzButtonComponent,
    FormsModule,
    RouterLink,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  registerUser!: IRegisterUser;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.signUpForm = this.formBuilder.group({
      role: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cfPassword: ['', Validators.required],
      term: ['', Validators.required],
    });
  }

  onSubmit() {
    this.registerUser = {
      userName: `${this.signUpForm.get('firstName')?.value} ${this.signUpForm.get('lastName')?.value}`,
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value,
      passwordConfirm: this.signUpForm.get('cfPassword')?.value,
      isCandidate: this.signUpForm.get('role')?.value === 'candidate'
    };
    this.authService.register(this.registerUser).subscribe(res => {
      console.log(res)
    });
  }
}

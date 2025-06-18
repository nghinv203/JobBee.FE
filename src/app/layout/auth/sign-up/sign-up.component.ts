import { Component } from '@angular/core';
import {BaseSignComponent} from '../base-sign/base-sign.component';
import {TranslatePipe} from '@ngx-translate/core';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {NzCheckboxComponent} from 'ng-zorro-antd/checkbox';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';

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

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      role: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.required]],
      cfPassword: ['', Validators.required],
      term: ['', Validators.required]
    });
  }

  onSubmit() {

  }
}

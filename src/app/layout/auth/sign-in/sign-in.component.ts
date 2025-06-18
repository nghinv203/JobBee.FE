import {Component, OnChanges, OnInit} from '@angular/core';
import {BaseSignComponent} from '../base-sign/base-sign.component';
import {TranslatePipe} from '@ngx-translate/core';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzCheckboxComponent} from 'ng-zorro-antd/checkbox';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [
    BaseSignComponent,
    TranslatePipe,
    NzInputDirective,
    NzIconDirective,
    NzCheckboxComponent,
    NzButtonComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnChanges{
  passwordVisible: boolean = false;
  signInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnChanges(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if(this.signInForm.valid) {
      console.log('Valid')
    }
  }


}

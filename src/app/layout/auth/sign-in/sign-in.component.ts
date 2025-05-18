import { Component } from '@angular/core';
import {BaseSignComponent} from '../base-sign/base-sign.component';
import {TranslatePipe} from '@ngx-translate/core';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzCheckboxComponent} from 'ng-zorro-antd/checkbox';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [
    BaseSignComponent,
    TranslatePipe,
    NzInputDirective,
    NzIconDirective,
    NzInputGroupComponent,
    NzCheckboxComponent,
    NzButtonComponent,
    RouterLink,
    FormsModule
  ],
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  passwordVisible: boolean = false;
}

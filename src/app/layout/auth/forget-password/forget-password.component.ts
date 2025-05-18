import { Component } from '@angular/core';
import {BaseSignComponent} from '../base-sign/base-sign.component';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {NzInputDirective} from 'ng-zorro-antd/input';

@Component({
  selector: 'app-forget-password',
  imports: [
    BaseSignComponent,
    NzButtonComponent,
    TranslatePipe,
    RouterLink,
    NzInputDirective
  ],
  standalone: true,
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

}

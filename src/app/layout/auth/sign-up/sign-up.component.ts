import { Component } from '@angular/core';
import {BaseSignComponent} from '../base-sign/base-sign.component';
import {TranslatePipe} from '@ngx-translate/core';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {NzCheckboxComponent} from 'ng-zorro-antd/checkbox';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-sign-up',
  imports: [
    BaseSignComponent,
    TranslatePipe,
    NzSelectComponent,
    NzOptionComponent,
    NzCheckboxComponent,
    NzInputDirective,
    NzButtonComponent
  ],
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}

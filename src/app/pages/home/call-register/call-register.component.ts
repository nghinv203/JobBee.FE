import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-call-register',
  imports: [
    TranslatePipe,
    NzButtonComponent
  ],
  standalone: true,
  templateUrl: './call-register.component.html',
  styleUrl: './call-register.component.scss'
})
export class CallRegisterComponent {

}

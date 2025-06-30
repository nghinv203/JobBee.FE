import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-setting-company',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './setting-company.component.html',
  styleUrl: './setting-company.component.scss'
})
export class SettingCompanyComponent {

}

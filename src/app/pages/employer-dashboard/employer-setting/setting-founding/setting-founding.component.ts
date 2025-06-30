import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-setting-founding',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './setting-founding.component.html',
  styleUrl: './setting-founding.component.scss'
})
export class SettingFoundingComponent {

}

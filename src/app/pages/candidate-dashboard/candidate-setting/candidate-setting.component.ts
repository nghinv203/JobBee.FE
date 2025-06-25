import {Component} from '@angular/core';
import {SettingTopbarComponent} from './setting-topbar/setting-topbar.component';
import {SettingPersonalComponent} from './setting-personal/setting-personal.component';

@Component({
  selector: 'app-candidate-setting',
  standalone: true,
  imports: [SettingTopbarComponent,
    SettingPersonalComponent],
  templateUrl: './candidate-setting.component.html',
  styleUrl: './candidate-setting.component.scss'
})
export class CandidateSettingComponent {

}

import {Component} from '@angular/core';
import {SettingTopbarComponent} from './setting-topbar/setting-topbar.component';
import {SettingPersonalComponent} from './setting-personal/setting-personal.component';
import {SettingExperienceComponent} from './setting-experience/setting-experience.component';
import {NgIf} from '@angular/common';
import {SettingEducationComponent} from './setting-education/setting-education.component';
import {SettingAccountComponent} from './setting-account/setting-account.component';

@Component({
  selector: 'app-candidate-setting',
  standalone: true,
  imports: [SettingTopbarComponent,
    SettingPersonalComponent,
    SettingExperienceComponent,
    NgIf,
    SettingEducationComponent,
    SettingAccountComponent],
  templateUrl: './candidate-setting.component.html',
  styleUrl: './candidate-setting.component.scss'
})
export class CandidateSettingComponent {
  receivedMessage: string = 'Personal';

  handleMessage(message: string) {
    this.receivedMessage = message;
    console.log(`Received message: ${message}`);
  }
}

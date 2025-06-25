import {Component} from '@angular/core';
import {SettingTopbarComponent} from './setting-topbar/setting-topbar.component';
import {SettingCompanyComponent} from './setting-company/setting-company.component';
import {NgIf} from '@angular/common';
import {SettingFoundingComponent} from './setting-founding/setting-founding.component';
import {SettingSocialComponent} from './setting-social/setting-social.component';
import {SettingAccountComponent} from './setting-account/setting-account.component';

@Component({
  selector: 'app-employer-setting',
  standalone: true,
  imports: [
    SettingTopbarComponent,
    SettingCompanyComponent,
    NgIf,
    SettingFoundingComponent,
    SettingFoundingComponent,
    SettingSocialComponent,
    SettingAccountComponent
  ],
  templateUrl: './employer-setting.component.html',
  styleUrl: './employer-setting.component.scss'
})
export class EmployerSettingComponent {
  receivedMessage: string = 'Company';

  handleMessage(message: string) {
    this.receivedMessage = message;
    console.log(`Received message: ${message}`);
  }
}

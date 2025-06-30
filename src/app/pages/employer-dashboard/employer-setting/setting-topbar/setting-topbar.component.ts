import {Component, EventEmitter, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-setting-topbar',
  standalone: true,
  imports: [
    NgClass,
    TranslatePipe
  ],
  templateUrl: './setting-topbar.component.html',
  styleUrl: './setting-topbar.component.scss'
})
export class SettingTopbarComponent {
  @Output() sendMessage = new EventEmitter<string>();

  message: string = 'Company';

  onMessageCompany() {
    this.message = 'Company';
    this.sendMessage.emit(this.message);
  }

  onMessageFounding() {
    this.message = 'Founding';
    this.sendMessage.emit(this.message);
  }

  onMessageSocial() {
    this.message = 'Social';
    this.sendMessage.emit(this.message);
  }

  onMessageAccount() {
    this.message = 'Account';
    this.sendMessage.emit(this.message);
  }
}

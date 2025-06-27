import {Component, EventEmitter, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-setting-topbar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './setting-topbar.component.html',
  styleUrl: './setting-topbar.component.scss'
})
export class SettingTopbarComponent {
  @Output() sendMessage = new EventEmitter<string>();

  message: string = 'Personal';

  onMessagePersonal() {
    this.message = 'Personal';
    this.sendMessage.emit(this.message);
  }

  onMessageExperiences() {
    this.message = 'Experiences';
    this.sendMessage.emit(this.message);
  }

  onMessageEducations() {
    this.message = 'Educations';
    this.sendMessage.emit(this.message);
  }

  onMessageAccount() {
    this.message = 'Account';
    this.sendMessage.emit(this.message);
  }
}

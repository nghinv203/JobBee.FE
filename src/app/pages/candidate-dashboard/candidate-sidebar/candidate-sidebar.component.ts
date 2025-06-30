import {Component, EventEmitter, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {AuthService} from '../../../shared/services/auth.service';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-candidate-sidebar',
  standalone: true,
  imports: [
    NgClass,
    TranslatePipe
  ],
  templateUrl: './candidate-sidebar.component.html',
  styleUrl: './candidate-sidebar.component.scss'
})
export class CandidateSidebarComponent {
  constructor(public authService: AuthService) {

  }

  @Output() sendMessage = new EventEmitter<string>();

  message: string = 'Overview';

  emitMessageOverview() {
    this.message = 'Overview';
    this.sendMessage.emit(this.message);
  }

  emitMessageApplied() {
    this.message = 'Applied';
    this.sendMessage.emit(this.message);
  }

  emitMessageFavourite() {
    this.message = 'Favourite';
    this.sendMessage.emit(this.message);
  }

  emitMessageAlert() {
    this.message = 'Alert';
    this.sendMessage.emit(this.message);
  }

  emitMessageSetting() {
    this.message = 'Setting';
    this.sendMessage.emit(this.message);
  }

  logOut() {
    this.authService.logout();
    location.href = "";
  }
}

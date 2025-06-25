import {Component, EventEmitter, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-candidate-sidebar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './candidate-sidebar.component.html',
  styleUrl: './candidate-sidebar.component.scss'
})
export class CandidateSidebarComponent {
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
}

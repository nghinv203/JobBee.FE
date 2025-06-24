import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-social-info',
  standalone: true,
  imports: [],
  templateUrl: './social-info.component.html',
  styleUrl: './social-info.component.scss'
})
export class SocialInfoComponent {
  @Output() sendMessagePrevious = new EventEmitter<string>();
  @Output() sendMessageNext = new EventEmitter<string>();

  emitMessagePrevious() {
    const message = 'founding-info';
    this.sendMessagePrevious.emit(message);
  }

  emitMessageNext() {
    const message = 'contact-info';
    this.sendMessageNext.emit(message);
  }
}

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  @Output() sendMessagePrevious = new EventEmitter<string>();
  @Output() sendMessageNext = new EventEmitter<string>();

  emitMessagePrevious() {
    const message = 'social-info';
    this.sendMessagePrevious.emit(message);
  }

  emitMessageNext() {
    const message = 'complete-setup';
    this.sendMessageNext.emit(message);
  }
}

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-founding-info',
  standalone: true,
  imports: [],
  templateUrl: './founding-info.component.html',
  styleUrl: './founding-info.component.scss'
})
export class FoundingInfoComponent {
  @Output() sendMessagePrevious = new EventEmitter<string>();
  @Output() sendMessageNext = new EventEmitter<string>();

  emitMessagePrevious() {
    const message = 'company-info';
    this.sendMessagePrevious.emit(message);
  }

  emitMessageNext() {
    const message = 'complete-setup';
    this.sendMessageNext.emit(message);
  }
}

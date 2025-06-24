import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.scss'
})
export class CompanyInfoComponent {
  @Output() sendMessage = new EventEmitter<string>();


  emitMessage() {
    const message = 'founding-info';
    this.sendMessage.emit(message);
  }
}

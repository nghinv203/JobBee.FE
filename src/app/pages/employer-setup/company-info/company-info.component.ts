import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [
    TranslatePipe,
    NgForOf
  ],
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

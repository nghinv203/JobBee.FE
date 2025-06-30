import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-employer-detail',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './employer-detail.component.html',
  styleUrl: './employer-detail.component.scss'
})
export class EmployerDetailComponent {
  @Output() sendMessage = new EventEmitter<boolean>();

  handleEmit() {
    this.sendMessage.emit(false);
  }
}

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-employer-detail',
  standalone: true,
  imports: [],
  templateUrl: './employer-detail.component.html',
  styleUrl: './employer-detail.component.scss'
})
export class EmployerDetailComponent {
  @Output() sendMessage = new EventEmitter<boolean>();

  handleEmit() {
    this.sendMessage.emit(false);
  }
}

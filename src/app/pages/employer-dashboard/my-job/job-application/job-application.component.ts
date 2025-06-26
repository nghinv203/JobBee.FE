import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.scss'
})
export class JobApplicationComponent {
  @Output() isAppication = new EventEmitter<boolean>();


  emitMessage() {
    this.isAppication.emit(false);
  }
}

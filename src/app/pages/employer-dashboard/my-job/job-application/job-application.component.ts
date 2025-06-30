import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.scss'
})
export class JobApplicationComponent {
  @Output() isAppication = new EventEmitter<boolean>();


  emitMessage() {
    this.isAppication.emit(false);
  }
}

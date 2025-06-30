import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-candidate-profile',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './candidate-profile.component.html',
  styleUrl: './candidate-profile.component.scss'
})
export class CandidateProfileComponent {
  @Output() isProfile = new EventEmitter<boolean>();


  emitMessage() {
    this.isProfile.emit(false);
  }
}

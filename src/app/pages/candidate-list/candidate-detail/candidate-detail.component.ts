import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-candidate-detail',
  standalone: true,
  imports: [],
  templateUrl: './candidate-detail.component.html',
  styleUrl: './candidate-detail.component.scss'
})
export class CandidateDetailComponent {
  @Output() isProfile = new EventEmitter<boolean>();


  emitMessage() {
    this.isProfile.emit(false);
  }
}

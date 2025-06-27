import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-resume',
  standalone: true,
  imports: [],
  templateUrl: './add-resume.component.html',
  styleUrl: './add-resume.component.scss'
})
export class AddResumeComponent {
  @Output() isOpenMessage = new EventEmitter<boolean>();

  isOpen: boolean = true;

  closePopUp() {
    this.isOpen = false;
    this.isOpenMessage.emit(this.isOpen);
  }
}

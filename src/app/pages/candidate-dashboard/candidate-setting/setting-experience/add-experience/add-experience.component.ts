import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-experience',
  standalone: true,
  imports: [],
  templateUrl: './add-experience.component.html',
  styleUrl: './add-experience.component.scss'
})
export class AddExperienceComponent {
  @Output() isOpenMessage = new EventEmitter<boolean>();

  isOpen: boolean = true;

  closeEducationPopUp() {
    this.isOpen = false;
    this.isOpenMessage.emit(this.isOpen);
  }
}

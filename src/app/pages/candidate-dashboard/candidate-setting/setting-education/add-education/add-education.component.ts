import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-education',
  standalone: true,
  imports: [],
  templateUrl: './add-education.component.html',
  styleUrl: './add-education.component.scss'
})
export class AddEducationComponent {
  @Output() isOpenMessage = new EventEmitter<boolean>();

  isOpen: boolean = true;

  closeEducationPopUp() {
    this.isOpen = false;
    this.isOpenMessage.emit(this.isOpen);
  }
}

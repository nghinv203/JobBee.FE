import { Component } from '@angular/core';
import {AddEducationComponent} from './add-education/add-education.component';

@Component({
  selector: 'app-setting-education',
  standalone: true,
  imports: [
    AddEducationComponent
  ],
  templateUrl: './setting-education.component.html',
  styleUrl: './setting-education.component.scss'
})
export class SettingEducationComponent {
  isAddExperience: boolean = false;

  openAddExperience() {
    this.isAddExperience = true;
    console.log('OpenAddResume');
  }

  handlePopUp(isOpen: boolean) {
    this.isAddExperience = isOpen;
  }
}

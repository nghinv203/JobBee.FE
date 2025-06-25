import { Component } from '@angular/core';
import {AddExperienceComponent} from './add-experience/add-experience.component';
import {AddResumeComponent} from '../setting-personal/add-resume/add-resume.component';

@Component({
  selector: 'app-setting-experience',
  standalone: true,
  imports: [AddExperienceComponent, AddResumeComponent],
  templateUrl: './setting-experience.component.html',
  styleUrl: './setting-experience.component.scss'
})
export class SettingExperienceComponent {
  isAddExperience: boolean = false;

  openAddExperience() {
    this.isAddExperience = true;
    console.log('OpenAddResume');
  }

  handlePopUp(isOpen: boolean) {
    this.isAddExperience = isOpen;
  }
}

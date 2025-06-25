import { Component } from '@angular/core';
import {AddResumeComponent} from './add-resume/add-resume.component';

@Component({
  selector: 'app-setting-personal',
  standalone: true,
  imports: [AddResumeComponent],
  templateUrl: './setting-personal.component.html',
  styleUrl: './setting-personal.component.scss'
})
export class SettingPersonalComponent {
  isAddResume: boolean = false;

  openAddResume() {
    this.isAddResume = true;
    console.log('OpenAddResume');
  }
}

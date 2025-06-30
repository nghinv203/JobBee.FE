import { Component } from '@angular/core';
import {AddResumeComponent} from './add-resume/add-resume.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-setting-personal',
  standalone: true,
  imports: [AddResumeComponent, TranslatePipe],
  templateUrl: './setting-personal.component.html',
  styleUrl: './setting-personal.component.scss'
})
export class SettingPersonalComponent {
  isAddResume: boolean = false;

  openAddResume() {
    this.isAddResume = true;
    console.log('OpenAddResume');
  }

  handlePopUp(isOpen: boolean) {
    this.isAddResume = isOpen;
  }
}

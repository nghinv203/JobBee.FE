import {Component} from '@angular/core';
import {AddResumeComponent} from '../setting-personal/add-resume/add-resume.component';

@Component({
  selector: 'app-setting-experience',
  standalone: true,
  imports: [
    AddResumeComponent],
  templateUrl: './setting-experience.component.html',
  styleUrl: './setting-experience.component.scss'
})
export class SettingExperienceComponent {

}

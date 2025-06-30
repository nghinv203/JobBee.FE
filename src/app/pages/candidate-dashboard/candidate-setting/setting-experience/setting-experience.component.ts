import {Component} from '@angular/core';
import {AddResumeComponent} from '../setting-personal/add-resume/add-resume.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-setting-experience',
  standalone: true,
  imports: [
    AddResumeComponent,
    TranslatePipe
  ],
  templateUrl: './setting-experience.component.html',
  styleUrl: './setting-experience.component.scss'
})
export class SettingExperienceComponent {

}

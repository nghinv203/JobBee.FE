import { Component } from '@angular/core';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-feature-jobs',
  imports: [
    ButtonComponent,
    TranslatePipe
  ],
  standalone: true,
  templateUrl: './feature-jobs.component.html',
  styleUrl: './feature-jobs.component.scss'
})
export class FeatureJobsComponent {

}

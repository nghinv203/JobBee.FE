import { Component } from '@angular/core';
import {JobBannerComponent} from './job-banner/job-banner.component';
import {CommonPositionComponent} from './common-position/common-position.component';

@Component({
  selector: 'app-home',
  imports: [
    JobBannerComponent,
    CommonPositionComponent
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

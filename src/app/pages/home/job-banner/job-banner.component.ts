import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-job-banner',
  imports: [
    TranslatePipe,
    DecimalPipe
  ],
  standalone: true,
  templateUrl: './job-banner.component.html',
  styleUrl: './job-banner.component.scss'
})
export class JobBannerComponent {

}

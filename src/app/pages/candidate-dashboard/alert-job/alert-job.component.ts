import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-alert-job',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './alert-job.component.html',
  styleUrl: './alert-job.component.scss'
})
export class AlertJobComponent {

}

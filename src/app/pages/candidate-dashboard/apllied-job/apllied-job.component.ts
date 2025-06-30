import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-apllied-job',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './apllied-job.component.html',
  styleUrl: './apllied-job.component.scss'
})
export class AplliedJobComponent {

}

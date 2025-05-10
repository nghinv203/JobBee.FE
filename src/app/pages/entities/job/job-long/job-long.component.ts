import {Component, Input} from '@angular/core';
import {IJob} from '../job.model';
import {TranslatePipe} from '@ngx-translate/core';
import {ButtonComponent} from '../../../../shared/reuseComponents/button/button.component';

@Component({
  selector: 'app-job-long',
  imports: [
    TranslatePipe,
    ButtonComponent
  ],
  standalone: true,
  templateUrl: './job-long.component.html',
  styleUrl: './job-long.component.scss'
})
export class JobLongComponent {
  @Input() data: IJob;
}

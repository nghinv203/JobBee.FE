import {Component, Input} from '@angular/core';
import {IJob} from '../job.model';
import {ButtonComponent} from '../../../../shared/reuseComponents/button/button.component';
import {TranslatePipe} from '@ngx-translate/core';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import {DueDatePipe} from '../../../../shared/pipes/dueDate/due-date.pipe';
import {FeatureJobDirective} from '../feature-job.directive';

@Component({
  selector: 'app-job-long',
  imports: [
    ButtonComponent,
    TranslatePipe,
    CurrencyPipe,
    DueDatePipe,
    TranslatePipe,
    FeatureJobDirective,
    AsyncPipe,
  ],
  standalone: true,
  templateUrl: './job-long.component.html',
  styleUrl: './job-long.component.scss'
})
export class JobLongComponent {
  @Input() data!: IJob;
}

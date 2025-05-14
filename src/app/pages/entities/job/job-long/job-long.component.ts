import {Component, Input} from '@angular/core';
import {IJob} from '../job.model';
import {ButtonComponent} from '../../../../shared/reuseComponents/button/button.component';
import {TranslatePipe} from '@ngx-translate/core';
import {CurrencyPipe} from '@angular/common';
import {DueDatePipe} from '../../../../shared/pipes/dueDate/due-date.pipe';

@Component({
  selector: 'app-job-long',
  imports: [
    ButtonComponent,
    TranslatePipe,
    CurrencyPipe,
    DueDatePipe,
  ],
  standalone: true,
  templateUrl: './job-long.component.html',
  styleUrl: './job-long.component.scss'
})
export class JobLongComponent {
  @Input() data!: IJob;
}

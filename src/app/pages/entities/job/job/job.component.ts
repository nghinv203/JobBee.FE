import {Component, Input} from '@angular/core';
import {IJob} from '../job.model';
import {ButtonComponent} from '../../../../shared/reuseComponents/button/button.component';
import {TranslatePipe} from '@ngx-translate/core';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import {DueDatePipe} from '../../../../shared/pipes/dueDate/due-date.pipe';
import {FeatureJobDirective} from '../feature-job.directive';
import {JobCellComponent} from './job-cell/job-cell.component';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {JobItemComponent} from './job-item/job-item.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job',
  imports: [
    ButtonComponent,
    TranslatePipe,
    CurrencyPipe,
    DueDatePipe,
    TranslatePipe,
    FeatureJobDirective,
    AsyncPipe,
    JobCellComponent,
    NzButtonComponent,
    JobItemComponent,
  ],
  standalone: true,
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  @Input() isGrid: boolean = true;
  @Input() data!: IJob;

  constructor() {
  }

  handleViewJobDetail(jobId: string) {
    window.open(`/jobs/detail/${jobId}`, '_blank');
  }
}

import {Component, Input} from '@angular/core';
import {IJob} from '../../job.model';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import {DueDatePipe} from '../../../../../shared/pipes/dueDate/due-date.pipe';
import {FeatureJobDirective} from '../../feature-job.directive';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-job-item',
  imports: [
    AsyncPipe,
    CurrencyPipe,
    DueDatePipe,
    FeatureJobDirective,
    NzButtonComponent,
    TranslatePipe
  ],
  standalone: true,
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.scss'
})
export class JobItemComponent {
  @Input() data!: IJob;
}

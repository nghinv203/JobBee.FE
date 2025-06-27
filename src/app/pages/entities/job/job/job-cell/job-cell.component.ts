import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {IJob} from '../../job.model';
import {FeatureJobDirective} from '../../feature-job.directive';
import {ShortNumberPipe} from '../../../../../shared/pipes/short-number/short-number.pipe';
import {TruncatePipe} from '../../../../../shared/pipes/truncate/truncate.pipe';
import {NzTooltipDirective} from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-job-cell',
  imports: [
    TranslatePipe,
    FeatureJobDirective,
    ShortNumberPipe,
    TruncatePipe,
    NzTooltipDirective
  ],
  standalone: true,
  templateUrl: './job-cell.component.html',
  styleUrl: './job-cell.component.scss'
})
export class JobCellComponent {
  @Input() data!: IJob;
}

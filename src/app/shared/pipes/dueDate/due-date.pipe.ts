import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
  standalone: true,
  name: 'dueDate'
})
export class DueDatePipe implements PipeTransform {

  constructor() {
  }

  transform(value: number | undefined): string {
    if (!value) {
      return 'global.job.expired';
    }
    const currentTime = new Date().getTime();
    const diffMs = value - currentTime;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if(diffDays < 0) {
      return 'global.job.expired';
    }
    if(diffDays === 0) {
      return 'global.job.dueToday';
    }
    return 'global.job.daysLeft';
  }

}

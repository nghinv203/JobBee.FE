import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  standalone: true,
  name: 'dueDate'
})
export class DueDatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(value: string | undefined): any {
    if (!value) {
      return this.translate.get('global.job.expired');
    }

    const current = new Date();
    const target = new Date(value);

    if (isNaN(target.getTime())) {
      return this.translate.get('global.job.expired');
    }

    current.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    const diffMs = target.getTime() - current.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return this.translate.get('global.job.expired');
    }

    if (diffDays === 0) {
      return this.translate.get('global.job.dueToday');
    }

    return this.translate.get('global.job.daysLeft', { days: diffDays });
  }
}

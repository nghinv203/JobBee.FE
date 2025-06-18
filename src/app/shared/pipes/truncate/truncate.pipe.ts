import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: unknown, length: number = 10, suffix: string = '...'): unknown {
    if (value == null || typeof value !== 'string') {
      return value;
    }

    const str = value as string;
    if (str.length <= length) {
      return str;
    }

    return str.slice(0, length) + suffix;
  }

}

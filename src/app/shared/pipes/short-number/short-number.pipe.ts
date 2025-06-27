import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(value: number | undefined): string {
    if (value == null) return '';
    if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'tỷ';
    if (value >= 1_000_000) return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'tr';
    if (value >= 1_000) return (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    return value.toString();
  }

}

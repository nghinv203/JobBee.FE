import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-base-sign',
  imports: [
    TranslatePipe,
    RouterLink
  ],
  standalone: true,
  templateUrl: './base-sign.component.html',
  styleUrl: './base-sign.component.scss'
})
export class BaseSignComponent {
  @Input() data: { openJob: number, company: number, newJob: number } = {
    openJob: 0,
    company: 0,
    newJob: 0
  }
}

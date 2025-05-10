import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';
import {IPopularJob} from './popular-jobs.model';

@Component({
  selector: 'app-popular-jobs',
  imports: [
    TranslatePipe,
    ButtonComponent
  ],
  standalone: true,
  templateUrl: './popular-jobs.component.html',
  styleUrl: './popular-jobs.component.scss'
})
export class PopularJobsComponent {
  @Input() poplarJobsData: IPopularJob[] = [];

}

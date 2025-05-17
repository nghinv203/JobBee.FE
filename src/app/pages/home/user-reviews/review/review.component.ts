import {Component, Input} from '@angular/core';
import {IReview} from './review.model';

@Component({
  selector: 'app-review',
  imports: [],
  standalone: true,
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  @Input() review: IReview = {};
}

import {Component, Input} from '@angular/core';
import {IReview} from './review/review.model';
import {ReviewComponent} from './review/review.component';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-user-reviews',
  imports: [
    ReviewComponent,
    NzButtonComponent,
    TranslatePipe
  ],
  standalone: true,
  templateUrl: './user-reviews.component.html',
  styleUrl: './user-reviews.component.scss'
})
export class UserReviewsComponent {
  // temporary review
  @Input() reviews: IReview[] = [
    {
      stars: 5,
      description: "Excellent service and very friendly staff!",
      user: {
        img: "assets/images/e0c67c378a58400a06da78e7a8ea3c04136a2792.jpg",
        fullName: "Alice Nguyen",
        position: "Frontend Developer"
      }
    },
    {
      stars: 4,
      description: "Good overall, but there’s still room for improvement.",
      user: {
        img: "assets/images/e0c67c378a58400a06da78e7a8ea3c04136a2792.jpg",
        fullName: "Brian Tran",
        position: "Marketing Specialist"
      }
    },
    {
      stars: 3,
      description: "The experience was average, nothing stood out.",
      user: {
        img: "assets/images/e0c67c378a58400a06da78e7a8ea3c04136a2792.jpg",
        fullName: "Catherine Le",
        position: "Content Writer"
      }
    },
    {
      stars: 5,
      description: "Loved it! Everything was smooth and professional.",
      user: {
        img: "assets/images/e0c67c378a58400a06da78e7a8ea3c04136a2792.jpg",
        fullName: "David Pham",
        position: "Software Engineer"
      }
    },
    {
      stars: 2,
      description: "Some parts were disappointing, especially support.",
      user: {
        img: "assets/images/e0c67c378a58400a06da78e7a8ea3c04136a2792.jpg",
        fullName: "Emily Do",
        position: "UX Researcher"
      }
    },
    {
      stars: 1,
      description: "Very bad experience, would not recommend.",
      user: {
        img: "assets/images/e0c67c378a58400a06da78e7a8ea3c04136a2792.jpg",
        fullName: "Frank Nguyen",
        position: "System Administrator"
      }
    },
    {
      stars: 4,
      description: "Quite happy with the service. Will use again.",
      user: {
        img: "assets/images/e0c67c378a58400a06da78e7a8ea3c04136a2792.jpg",
        fullName: "Grace Ho",
        position: "Project Manager"
      }
    },
    {
      stars: 3,
      description: "Mediocre performance. Expected more.",
      user: {
        img: "assets/images/e0c67c378a58400a06da78e7a8ea3c04136a2792.jpg",
        fullName: "Henry Vo",
        position: "Business Analyst"
      }
    },
    {
      stars: 5,
      description: "Absolutely fantastic. Highly recommended!",
      user: {
        img: "assets/images/e0c67c378a58400a06da78e7a8ea3c04136a2792.jpg",
        fullName: "Isabella Phan",
        position: "Data Scientist"
      }
    },
    {
      stars: 4,
      description: "Very efficient and professional team.",
      user: {
        img: "assets/images/e0c67c378a58400a06da78e7a8ea3c04136a2792.jpg",
        fullName: "Jacky Dang",
        position: "DevOps Engineer"
      }
    }
  ];
  currentIndex = 0;
  itemsPerSlide = 3;

  get visibleReviews(): IReview[] {
    return this.reviews.slice(this.currentIndex, this.currentIndex + this.itemsPerSlide);
  }

  get maxIndexs(): number {
    return this.reviews ? Math.max(0, this.reviews.length - this.itemsPerSlide) : 0;
  }

  get dotArray(): number[] {
    return Array(Math.ceil((this.reviews?.length || 0) / this.itemsPerSlide)).fill(0).map((_, i) => i);
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsPerSlide;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.maxIndexs) {
      this.currentIndex += this.itemsPerSlide;
    }
  }
}

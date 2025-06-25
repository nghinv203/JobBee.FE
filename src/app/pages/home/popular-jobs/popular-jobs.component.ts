import {Component, Input, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';
import {IPopularJob} from './popular-jobs.model';
import {JobCategoryService} from '../../../core/services/jobs-category/job-category.service';

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
export class PopularJobsComponent implements OnInit{
  poplarJobsData: IPopularJob[] = [];

  constructor(private jobCategoryService: JobCategoryService) {
  }

  ngOnInit(): void {
    this.jobCategoryService.getCategoryPopular({ page: 1, pageSize: 8 })
      .subscribe(res => {
        this.poplarJobsData = (res.data as any).items;
      });
  }

}

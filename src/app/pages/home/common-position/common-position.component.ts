import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {ICommonPosition} from './common-position.model';
import {DecimalPipe} from '@angular/common';
import {JobsService} from '../../../core/services/jobs/jobs.service';

@Component({
  selector: 'app-common-position',
  imports: [
    TranslatePipe,
    DecimalPipe
  ],
  standalone: true,
  templateUrl: './common-position.component.html',
  styleUrl: './common-position.component.scss'
})
export class CommonPositionComponent implements OnInit{
  commonPosition: ICommonPosition[] = [];

  constructor(private jobsService: JobsService) {
  }

  ngOnInit(): void {
    this.jobsService.getCommonJobs({ page: 1, pageSize: 10 })
      .subscribe(res => {
        this.commonPosition = (res.data as any).items;
        console.log(this.commonPosition)
      });
  }
}

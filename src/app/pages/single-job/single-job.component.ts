import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JobsService} from '../../core/services/jobs/jobs.service';
import {finalize} from 'rxjs';
import {IJobDetail} from '../../shared/models/common';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-single-job',
  imports: [
    JsonPipe
  ],
  standalone: true,
  templateUrl: './single-job.component.html',
  styleUrl: './single-job.component.scss'
})
export class SingleJobComponent implements OnInit{

  job!: IJobDetail;
  isLoading = true;

  constructor(private route: ActivatedRoute, private jobService: JobsService) {
  }

  ngOnInit() {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.jobService.getJobDetail(id!)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
        this.job = res.data;
        console.log(this.job)
      })
  }
}

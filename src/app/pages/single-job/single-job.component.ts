import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-job',
  imports: [],
  standalone: true,
  templateUrl: './single-job.component.html',
  styleUrl: './single-job.component.scss'
})
export class SingleJobComponent implements OnInit{
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

  }
}

import { Component } from '@angular/core';
import {JobApplicationComponent} from './job-application/job-application.component';

@Component({
  selector: 'app-my-job',
  standalone: true,
  imports: [JobApplicationComponent],
  templateUrl: './my-job.component.html',
  styleUrl: './my-job.component.scss'
})
export class MyJobComponent {
  isJobApplication = false;

  OpenJobApplication() {
    this.isJobApplication = true;
  }

  isOpenApplication(isOpen: boolean) {
    this.isJobApplication = isOpen;
  }
}

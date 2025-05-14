import { Component } from '@angular/core';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';
import {TranslatePipe} from '@ngx-translate/core';
import {IJob, JobType} from '../../entities/job/job.model';
import {JobLongComponent} from '../../entities/job/job-long/job-long.component';

@Component({
  selector: 'app-feature-jobs',
  imports: [
    ButtonComponent,
    TranslatePipe,
    JobLongComponent
  ],
  standalone: true,
  templateUrl: './feature-jobs.component.html',
  styleUrl: './feature-jobs.component.scss'
})
export class FeatureJobsComponent {
  jobs: IJob[] = [
    {
      id: '1',
      name: 'Kỹ sư phần mềm',
      jobType: JobType.FULL_TIME,
      floorSalary: 20_000_000,
      cellingSalary: 30_000_000,
      dueTime: new Date('2025-06-30').getTime(), // 1751577600000
      location: 'Hà Nội'
    },
    {
      id: '2',
      name: 'Nhân viên bán thời gian',
      jobType: JobType.PART_TIME,
      floorSalary: 5_000_000,
      cellingSalary: 8_000_000,
      dueTime: new Date('2025-05-31').getTime(), // 1746230400000
      location: 'TP. Hồ Chí Minh'
    },
    {
      id: '3',
      name: 'Thực tập sinh Marketing',
      jobType: JobType.INTERNSHIP,
      floorSalary: 3_000_000,
      cellingSalary: 4_500_000,
      dueTime: new Date('2025-05-20').getTime(), // 1747804800000
      location: 'Đà Nẵng'
    },
    {
      id: '4',
      name: 'Nhân viên bán hàng thời vụ',
      jobType: JobType.SEASONAL,
      floorSalary: 6_000_000,
      cellingSalary: 9_000_000,
      dueTime: new Date('2025-07-15').getTime(), // 1752758400000
      location: 'Cần Thơ'
    },
    {
      id: '5',
      name: 'Giáo viên dạy tiếng Anh (Remote)',
      jobType: JobType.REMOTE,
      floorSalary: 10_000_000,
      cellingSalary: 15_000_000,
      dueTime: new Date('2025-06-10').getTime(), // 1750012800000
      location: 'Làm việc từ xa'
    },
    {
      id: '6',
      name: 'Nhân viên thiết kế đồ họa (Hybrid)',
      jobType: JobType.HYBRID,
      floorSalary: 12_000_000,
      cellingSalary: 18_000_000,
      dueTime: new Date('2025-06-25').getTime(), // 1750867200000
      location: 'TP. Hồ Chí Minh / Remote'
    }
  ];

}

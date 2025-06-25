import { Component } from '@angular/core';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';
import {TranslatePipe} from '@ngx-translate/core';
import {IJob, JobType} from '../../entities/job/job.model';
import {JobLongComponent} from '../../entities/job/job-long/job-long.component';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-feature-jobs',
    imports: [
        ButtonComponent,
        TranslatePipe,
        JobLongComponent,
        NzButtonComponent,
        RouterLink
    ],
  standalone: true,
  templateUrl: './feature-jobs.component.html',
  styleUrl: './feature-jobs.component.scss'
})
export class FeatureJobsComponent {
  jobs: IJob[] = [
    {
      id: '1',
      title: 'Kỹ sư phần mềm',
      job_type: JobType.FULL_TIME,
      min_salary: 20_000_000,
      max_salary: 30_000_000,
      application_deadline: new Date('2025-06-30').toString(),
      location_city: 'Hà Nội',
      is_featured: true,
    },
    {
      id: '2',
      title: 'Nhân viên bán thời gian',
      job_type: JobType.PART_TIME,
      min_salary: 5_000_000,
      max_salary: 8_000_000,
      application_deadline: new Date('2025-05-31').toString(),
      location_city: 'TP. Hồ Chí Minh'
    },
    {
      id: '3',
      title: 'Thực tập sinh Marketing',
      job_type: JobType.INTERNSHIP,
      min_salary: 3_000_000,
      max_salary: 4_500_000,
      application_deadline: new Date('2025-05-20').toString(),
      location_city: 'Đà Nẵng'
    },
    {
      id: '4',
      title: 'Nhân viên bán hàng thời vụ',
      job_type: JobType.SEASONAL,
      min_salary: 6_000_000,
      max_salary: 9_000_000,
      application_deadline: new Date('2025-07-15').toString(),
      location_city: 'Cần Thơ'
    },
    {
      id: '5',
      title: 'Giáo viên dạy tiếng Anh (Remote)',
      job_type: JobType.REMOTE,
      min_salary: 10_000_000,
      max_salary: 15_000_000,
      application_deadline: new Date('2025-06-10').toString(),
      location_city: 'Làm việc từ xa'
    },
    {
      id: '6',
      title: 'Nhân viên thiết kế đồ họa (Hybrid)',
      job_type: JobType.HYBRID,
      min_salary: 12_000_000,
      max_salary: 18_000_000,
      application_deadline: new Date('2025-06-25').toString(),
      location_city: 'TP. Hồ Chí Minh / Remote'
    }
  ];

}

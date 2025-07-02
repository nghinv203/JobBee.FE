import {Component, OnInit} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup, ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {EditorComponent} from '@tinymce/tinymce-angular';
import {init} from '../../../shared/common.constanst';
import {LocationService} from '../../../core/services/location/location.service';
import {EmployerListService} from '../../../core/services/employer-list/employer-list.service';
import {AuthService} from '../../../shared/services/auth.service';
import {JobCategoryService} from '../../../core/services/jobs-category/job-category.service';
import {JobsService} from '../../../core/services/jobs/jobs.service';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [TranslatePipe, EditorComponent, ReactiveFormsModule],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.scss',
})
export class PostJobComponent implements OnInit{
  jobForm!: FormGroup;
  cities: any;
  districts: any;
  communes: any;
  categories: any;

  constructor(private fb: FormBuilder,
              private locationService: LocationService,
              private employerService: EmployerListService,
              private categoriesService: JobCategoryService,
              private jobService: JobsService,
              private toarst: NzNotificationService,
              private authService: AuthService) {
    this.jobForm = this.fb.group({
      employerId: [null, Validators.required],
      title: [null, Validators.required],
      jobCategory: [null, Validators.required],
      jobType: [null, Validators.required],
      experienceLevelId: [null, Validators.required],
      minEducationId: [null, Validators.required],
      description: [null, Validators.required],
      responsibilities: [null, Validators.required],
      requirements: [null, Validators.required],
      minSalary: [null, [Validators.required, Validators.min(0)]],
      maxSalary: [null, [Validators.required, Validators.min(0)]],
      salaryPeriod: [null, Validators.required],
      currency: [null, Validators.required],
      isSalaryNegotiable: [null, Validators.required],
      locationCity: [null, Validators.required],
      locationState: [null, Validators.required],
      locationCountry: [null, Validators.required],
      isRemote: [null, Validators.required],
      allowsWorkFromHome: [null, Validators.required],
      applicationDeadline: [null, [Validators.required, minUnixTimestampOneHourFromNow()]],
      isFeature: [null, Validators.required],
      isActive: [null, Validators.required],
      expiresAt: [null, [Validators.required, minUnixTimestampOneHourFromNow()]],
    });
  }
  protected readonly init = init;

  ngOnInit(): void {
    this.handleLoadCities();
    this.handleCityChange();
    this.handleDistrictChange();
    this.handleGetEmployerId();
    this.handleGetJobCategories();
  }

  handleLoadCities(): void {
    this.locationService.fetchProvines().subscribe(res => {
      this.cities = res.data;
    });
  }

  handleCityChange() {
    this.jobForm.get('locationCity')?.valueChanges
      .pipe()
      .subscribe(res => {
        this.locationService.fetchDistrictByProvinceId(res)
          .subscribe(res => {
            this.districts = res.data;
          });
      });
  }

  handleDistrictChange(): void {
    this.jobForm.get('locationState')?.valueChanges
      .pipe()
      .subscribe(res => {
        this.locationService.fetchCommuneByDistrictId(res)
          .subscribe(res => {
            this.communes = res.data;
          })
      })
  }

  handleGetEmployerId(): void {
    this.employerService.getEmployerId(this.authService.getUserId() ?? '')
      .subscribe(res => {
        console.log(res)
        this.jobForm.patchValue({
          employerId: res.data
        });
      })
  }

  handleGetJobCategories(): void {
    this.categoriesService.getAllCategory()
      .subscribe(res => {
        this.categories = res.data;
      })
  }

  handleCreateJob() {
    if (this.jobForm.value) {
      this.jobForm.patchValue({
        isActive: true,
        expiresAt: new Date(this.jobForm.get('applicationDeadline')?.value).getTime(),
        applicationDeadline: new Date(this.jobForm.get('applicationDeadline')?.value).getTime(),
      })
      this.jobService.postJob(this.jobForm.value).subscribe(res => {
        this.toarst.success('Tạo công việc mới thành công', 'Công việc mới đã được tạo');
      });
    }
    this.toarst.error('Tạo công việc mới thất bại', 'Tạo thất bại hay xem lại');
  }
}

export function minUnixTimestampOneHourFromNow(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const now = Math.floor(Date.now() / 1000);
    const oneHourLater = now + 3600;
    if (typeof value !== 'number') {
      return { invalidTimestamp: true };
    }
    if (value < oneHourLater) {
      return { tooSoon: true };
    }
    return null;
  };
}

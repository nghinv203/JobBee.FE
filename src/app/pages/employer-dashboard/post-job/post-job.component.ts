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
import {AuthService} from '../../../shared/services/auth.service';
import {JobCategoryService} from '../../../core/services/jobs-category/job-category.service';
import {JobsService} from '../../../core/services/jobs/jobs.service';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {JobTypeService} from '../../../core/services/job-type/job-type.service';
import {ExperienceService} from '../../../core/services/experiences/experience.service';
import {EducationService} from '../../../core/services/educations/education.service';
import {LoadingComponent} from '../../../shared/reuseComponents/loading/loading.component';
import {finalize} from 'rxjs';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [TranslatePipe, EditorComponent, ReactiveFormsModule, LoadingComponent],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.scss',
})
export class PostJobComponent implements OnInit{
  jobForm!: FormGroup;
  cities: any;
  districts: any;
  communes: any;
  categories: any;
  types: any;
  experiences: any;
  education: any;

  constructor(private fb: FormBuilder,
              private locationService: LocationService,
              private categoriesService: JobCategoryService,
              private jobService: JobsService,
              private jobTypeService: JobTypeService,
              private experienceService: ExperienceService,
              private educationService: EducationService,
              private toarst: NzNotificationService,
              private authService: AuthService) {
    this.jobForm = this.fb.group({
      title: [null, Validators.required],
      jobCategoryId: [null, Validators.required],
      jobTypeId: [null, Validators.required],
      experienceLevelId: [null, Validators.required],
      minEducationId: [null, Validators.required],
      description: [null, Validators.required],
      responsibilities: [null, Validators.required],
      requirements: [null, Validators.required],
      minSalary: [null, [Validators.required, Validators.min(0)]],
      maxSalary: [null, [Validators.required, Validators.min(0)]],
      salaryPeriod: [null, Validators.required],
      currency: ['VND', Validators.required],
      isSalaryNegotiable: [null, Validators.required],
      locationCity: [null, Validators.required],
      locationState: [null, Validators.required],
      locationCountry: [null, Validators.required],
      isRemote: [false, Validators.required],
      allowsWorkFromHome: [null, Validators.required],
      applicationDeadline: [null, [Validators.required, minUnixTimestampOneHourFromNow()]],
      isFeature: [false, Validators.required],
      isActive: [true, Validators.required],
      expiresAt: [null, [Validators.required, minUnixTimestampOneHourFromNow()]],
    });
  }
  protected readonly init = init;

  loading = true;

  async ngOnInit(): Promise<void> {
    this.loading = true;

    await Promise.all([
      this.handleLoadCities(),
      this.handleCityChange(),
      this.handleDistrictChange(),
      this.handleGetJobCategories(),
      this.handleGetJobType(),
      this.handleGetExperiences(),
      this.handleGetEducation()
    ]);

    this.loading = false;
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

  handleGetJobCategories(): void {
    this.categoriesService.getAllCategory()
      .subscribe(res => {
        this.categories = res.data;
      })
  }

  handleGetJobType(): void {
    this.jobTypeService.getJobTypes()
      .subscribe(res => {
        this.types = res.data
      })
  }

  handleGetExperiences(): void {
    this.experienceService.getExperiences()
      .subscribe(res => {
        this.experiences = res.data;
      });
  }

  handleGetEducation(): void {
    this.educationService.getEducations()
      .subscribe(res => {
        this.education = res.data;
      })
  }

  handleCreateJob() {
    debugger
    this.jobForm.patchValue({
      expiresAt: new Date(this.jobForm.get('applicationDeadline')?.value).getTime() / 1000,
      applicationDeadline: new Date(this.jobForm.get('applicationDeadline')?.value).getTime() / 1000,
    });
    if (this.jobForm.invalid) {
      Object.keys(this.jobForm.controls).forEach(field => {
        const control = this.jobForm.get(field);
        if (control && control.invalid) {
          console.log(`❌ Field '${field}' is invalid`, control.errors);
        }
      });
      this.toarst.error('Dữ liệu không hợp lệ', 'Vui lòng kiểm tra lại form');
      return;
    }

    const raw = this.jobForm.getRawValue();

    // convert id → name
    const cityName     = this.cities.find((c: any) => c.id === raw.locationCity)?.name;
    const districtName = this.districts.find((d: any) => d.id === raw.locationState)?.name;
    const communeName  = this.communes.find((c: any) => c.id === raw.locationCountry)?.name;
    console.log(raw)
    const payload = {
      title:              raw.title,
      jobCategoryId:      raw.jobCategoryId,        // string UUID
      jobTypeId:          raw.jobTypeId,            // string UUID
      experienceLevelId:  raw.experienceLevelId,    // string UUID
      minEducationId:     raw.minEducationId,       // string UUID
      description:        raw.description,
      responsibilities:   raw.responsibilities,
      requirements:       raw.requirements,
      minSalary:          raw.minSalary,            // number
      maxSalary:          raw.maxSalary,            // number
      salaryPeriod:       raw.salaryPeriod,         // "Hourly"|"Monthly"|"Yearly"
      currency:           'VND',
      isSalaryNegotiable: raw.isSalaryNegotiable === 'true',   // boolean
      isRemote:           raw.isRemote === 'true',             // boolean
      allowsWorkFromHome: raw.allowsWorkFromHome === 'true',   // boolean
      isFeatured:         raw.isFeatured === 'true',           // boolean
      isActive:           true,
      applicationDeadline: new Date(raw.applicationDeadline).getTime(),
      expiresAt:           new Date(raw.applicationDeadline).getTime(),
      locationCity:        cityName,
      locationState:       districtName,
      locationCountry:     communeName
    };

    this.loading = true;
    this.jobService.postJob(payload)
      .pipe(
        finalize(() => this.loading = false) // chạy cuối cùng dù thành công hay lỗi
      )
      .subscribe({
        next: () => this.toarst.success('Tạo công việc mới thành công', ''),
        error: () => this.toarst.error('Tạo thất bại, vui lòng thử lại', '')
      });
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

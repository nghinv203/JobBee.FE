import {Component} from '@angular/core';
import {AddResumeComponent} from '../setting-personal/add-resume/add-resume.component';
import {TranslatePipe} from '@ngx-translate/core';
import {CandidatesService} from '../../../../core/services/candidates/candidates.service';
import {AuthService} from '../../../../shared/services/auth.service';
import {FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';
import {NgForOf} from '@angular/common';
import {LocationService} from '../../../../core/services/location/location.service';

@Component({
  selector: 'app-setting-experience',
  standalone: true,
  imports: [
    AddResumeComponent,
    TranslatePipe,
    FormsModule,
    NgForOf
  ],
  templateUrl: './setting-experience.component.html',
  styleUrl: './setting-experience.component.scss'
})
export class SettingExperienceComponent {

  constructor(private candidateService: CandidatesService,
              private authService: AuthService,
              private locationService: LocationService,) {
  }


  id: string = '';
  userId: string | null = '';
  firstName: string = '';
  lastName: string = '';
  profilePicture: string = '';
  phone: string = '';
  birthDate: string = ''; // formatted as 'yyyy-MM-dd'
  gender: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  country: string = '';
  postalCode: string = '';
  headline: string = '';
  summary: string = '';
  currentSalary: number = 0;
  salaryExpectation: number = 0;
  experienceYears: number = 0;
  isAvailableForHire: boolean = true;

  candidateId: string = '...';
  provinces: any[] = [];
  districts: any[] = [];
  wards: any[] = [];

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    if (!this.userId) {
      console.error("No user ID found.");
      return;
    }

    this.candidateService.getCandidateIdByUser(this.userId).subscribe({
      next: (res) => {
        this.candidateId = res.data.id;
        this.loadCandidate()
      },
      error: (err) => {
        console.error('Failed to get candidate ID:', err);
      }
    });

    // Load provinces
    this.locationService.fetchProvines().subscribe({
      next: (res) => {
        this.provinces = res.data;
        console.log(this.provinces);
      },
      error: () => {
        console.error('Failed to fetch provinces.');
      }
    });
  }

  loadCandidate() {
    this.candidateService.getCandidateById(this.candidateId).subscribe(response => {
      const data = response.data;
      this.id = data.id;
      this.userId = data.userId;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.profilePicture = data.profilePicture;
      this.phone = data.phone;
      this.birthDate = data.birthDate ? new Date(data.birthDate).toISOString().substring(0, 10) : '';
      this.gender = data.gender;
      this.address = data.address;
      this.city = data.city;
      this.state = data.state;
      this.country = data.country;
      this.postalCode = data.postalCode;
      this.headline = data.headline;
      this.summary = data.summary;
      this.currentSalary = data.currentSalary;
      this.salaryExpectation = data.salaryExpectation;
      this.experienceYears = data.experienceYears;
      this.isAvailableForHire = data.isAvailableForHire;
    });
  }

  saveProfile(): void {
    this.userId = this.authService.getUserId();
    if (!this.userId) {
      console.error("No user ID found.");
      return;
    }

    const birthDateEpoch = this.birthDate
      ? Math.floor(new Date(this.birthDate + 'T00:00:00Z').getTime() / 1000)
      : 0;

    this.candidateService.getCandidateIdByUser(this.userId).subscribe({
      next: (res) => {
        this.candidateId = res.data.id;

        const updatedCandidate = {
          id: this.candidateId,
          userId: this.userId,
          firstName: this.firstName,
          lastName: this.lastName,
          profilePicture: this.profilePicture,
          phone: this.phone,
          birthDate: birthDateEpoch,
          gender: this.gender,
          address: this.address,
          city: this.city,
          state: this.state,
          country: this.country,
          postalCode: this.postalCode,
          headline: this.headline,
          summary: this.summary,
          currentSalary: this.currentSalary,
          salaryExpectation: this.salaryExpectation,
          experienceYears: this.experienceYears,
          isAvailableForHire: this.isAvailableForHire
        };

        this.candidateService.updateCandidateProfile(updatedCandidate).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: 'Cập nhật thành công',
              text: 'Thông tin hồ sơ đã được lưu.',
              timer: 2000,
              showConfirmButton: false
            });
          },
          error: () => {
            Swal.fire({
              icon: 'error',
              title: 'Lỗi',
              text: 'Không thể cập nhật hồ sơ. Vui lòng thử lại.',
            });
          }
        });
      },
      error: (err) => {
        console.error('Failed to get candidate ID:', err);
      }
    });
  }

  onCityChange(): void {
    const selectedProvince = this.provinces.find(p => p.name === this.city);
    if (selectedProvince) {
      this.state = '';
      this.address = '';
      this.districts = [];
      this.wards = [];

      this.locationService.fetchDistrictByProvinceId(selectedProvince.id).subscribe({
        next: (res) => {
          this.districts = res.data;
        },
        error: () => {
          console.error('Failed to fetch districts.');
        }
      });
    }
  }

  onStateChange(): void {
    const selectedDistrict = this.districts.find(d => d.name === this.state);
    if (selectedDistrict) {
      this.address = '';
      this.wards = [];

      this.locationService.fetchCommuneByDistrictId(selectedDistrict.id).subscribe({
        next: (res) => {
          this.wards = res.data;
        },
        error: () => {
          console.error('Failed to fetch communes.');
        }
      });
    }
  }


}

import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {AuthService} from '../../../../shared/services/auth.service';
import Swal from 'sweetalert2';
import {TranslatePipe} from '@ngx-translate/core';
import {CandidatesService} from '../../../../core/services/candidates/candidates.service';

@Component({
  selector: 'app-setting-account',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    TranslatePipe
  ],
  templateUrl: './setting-account.component.html',
  styleUrl: './setting-account.component.scss'
})
export class SettingAccountComponent {
  oldPassword: string = '';
  password: string = '';
  confirmPassword: string = '';
  email: string = '';

  // password visibility toggles
  showCurrent = false;
  showNew = false;
  showConfirm = false;

  constructor(private authService: AuthService,
              private candidateService: CandidatesService,  ) {
    const user = this.authService.getUserInfo();
    if (user?.email) {
      this.email = user.email;
    }
  }

  onChangePassword(): void {
    if (this.password !== this.confirmPassword) {
      Swal.fire('Error', 'New passwords do not match.', 'error');
      return;
    }

    const payload = {
      email: this.email,
      oldPassword: this.oldPassword,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    this.authService.changePassword(payload).subscribe({
      next: () => Swal.fire('Success', 'Password changed successfully.', 'success'),
      error: () => Swal.fire('Error', 'Failed to change password.', 'error')
    });
  }

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

  updateAvailability(): void {
    if (!this.userId) {
      console.error("No user ID found.");
      return;
    }

    if (!this.candidateId) {
      this.candidateService.getCandidateIdByUser(this.userId).subscribe({
        next: (res) => {
          this.candidateId = res.data.id;
          this.updateCandidate();
        },
        error: (err) => {
          console.error('Failed to get candidate ID:', err);
        }
      });
    } else {
      this.updateCandidate();
    }
  }

  private updateCandidate(): void {
    this.candidateService.updateCandidateProfile({
      id: this.id,
      userId: this.userId,
      firstName: this.firstName,
      lastName: this.lastName,
      profilePicture: this.profilePicture,
      phone: this.phone,
      birthDate: this.birthDate,
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
      isAvailableForHire: this.isAvailableForHire,
    }).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Cập nhật thành công',
          text: 'Trạng thái sẵn sàng làm việc đã được cập nhật.',
          timer: 1500,
          showConfirmButton: false
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Lỗi',
          text: 'Không thể cập nhật trạng thái. Vui lòng thử lại.',
        });
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

}

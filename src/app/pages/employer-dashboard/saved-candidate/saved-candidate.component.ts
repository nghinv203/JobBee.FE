import { Component } from '@angular/core';
import {CandidateProfileComponent} from './candidate-profile/candidate-profile.component';

@Component({
  selector: 'app-saved-candidate',
  standalone: true,
  imports: [CandidateProfileComponent],
  templateUrl: './saved-candidate.component.html',
  styleUrl: './saved-candidate.component.scss'
})
export class SavedCandidateComponent {
  isProfile: boolean = false;

  OpenProfile() {
    this.isProfile = true;
  }

  isOpenProfile(isOpen: boolean) {
    this.isProfile = isOpen;
  }
}

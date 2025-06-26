import { Component } from '@angular/core';
import {HeaderComponent} from '../../layout/main/header/header.component';
import {CandidateSearchComponent} from './candidate-search/candidate-search.component';
import {CandidateDetailComponent} from './candidate-detail/candidate-detail.component';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [
    HeaderComponent,
    CandidateSearchComponent,
    CandidateDetailComponent
  ],
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.scss'
})
export class CandidateListComponent {
  isProfile: boolean = false;

  OpenProfile() {
    this.isProfile = true;
  }

  isOpenProfile(isOpen: boolean) {
    this.isProfile = isOpen;
  }
}

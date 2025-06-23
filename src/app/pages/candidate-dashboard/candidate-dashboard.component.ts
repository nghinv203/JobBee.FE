import {Component} from '@angular/core';
import {CandidateSidebarComponent} from './candidate-sidebar/candidate-sidebar.component';
import {DashboardContentComponent} from './dashboard-content/dashboard-content.component';
import {HeaderComponent} from '../../layout/main/header/header.component';
import {AplliedJobComponent} from './apllied-job/apllied-job.component';
import {NgIf} from '@angular/common';
import {FavoriteJobComponent} from './favorite-job/favorite-job.component';
import {AlertJobComponent} from './alert-job/alert-job.component';
import {CandidateSettingComponent} from './candidate-setting/candidate-setting.component';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: true,
  imports: [CandidateSidebarComponent,
    DashboardContentComponent,
    HeaderComponent,
    AplliedJobComponent,
    NgIf,
    FavoriteJobComponent,
    AlertJobComponent,
    CandidateSettingComponent],
  templateUrl: './candidate-dashboard.component.html',
  styleUrl: './candidate-dashboard.component.scss'
})
export class CandidateDashboardComponent {
  receivedMessage: string = 'Overview';

  handleMessage(message: string) {
    this.receivedMessage = message;
    console.log(`Received message: ${message}`);
  }
}

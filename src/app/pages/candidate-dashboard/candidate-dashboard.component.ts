import { Component } from '@angular/core';
import {CandidateSidebarComponent} from './candidate-sidebar/candidate-sidebar.component';
import {DashboardContentComponent} from './dashboard-content/dashboard-content.component';
import {HeaderComponent} from '../../layout/main/header/header.component';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: true,
  imports: [CandidateSidebarComponent, DashboardContentComponent, HeaderComponent],
  templateUrl: './candidate-dashboard.component.html',
  styleUrl: './candidate-dashboard.component.scss'
})
export class CandidateDashboardComponent {

}

import { Component } from '@angular/core';
import {EmployerSidebarComponent} from './employer-sidebar/employer-sidebar.component';
import {HeaderComponent} from '../../layout/main/header/header.component';
import {FooterComponent} from '../../layout/main/footer/footer.component';
import {DashboardContentComponent} from './dashboard-content/dashboard-content.component';
import {PostJobComponent} from './post-job/post-job.component';
import {NgIf} from '@angular/common';
import {MyJobComponent} from './my-job/my-job.component';

@Component({
  selector: 'app-employer-dashboard',
  standalone: true,
  imports: [EmployerSidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardContentComponent,
    PostJobComponent,
    NgIf,
    MyJobComponent],
  templateUrl: './employer-dashboard.component.html',
  styleUrl: './employer-dashboard.component.scss'
})
export class EmployerDashboardComponent {
  receivedMessage: string = 'Overview';

  handleMessage(message: string) {
    this.receivedMessage = message;
    console.log(`Received message: ${message}`);
  }

}

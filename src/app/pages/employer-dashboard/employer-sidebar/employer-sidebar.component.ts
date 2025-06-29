import {Component, EventEmitter, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-employer-sidebar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './employer-sidebar.component.html',
  styleUrl: './employer-sidebar.component.scss'
})
export class EmployerSidebarComponent {
  constructor(public authService: AuthService) {

  }

  @Output() sendMessage = new EventEmitter<string>();

  message: string = 'Overview';

  emitMessageOverview() {
    this.message = 'Overview';
    this.sendMessage.emit(this.message);
  }

  emitMessageSetting() {
    this.message = 'Settings';
    this.sendMessage.emit(this.message);
  }

  emitMessagePostAJob() {
    this.message = 'PostAJob';
    this.sendMessage.emit(this.message);
  }

  emitMessageMyJobs() {
    this.message = 'MyJobs';
    this.sendMessage.emit(this.message);
  }

  emitMessageSavedCandidate() {
    this.message = 'SavedCandidate';
    this.sendMessage.emit(this.message);
  }

  emitMessagePlansBilling() {
    this.message = 'PlansBilling';
    this.sendMessage.emit(this.message);
  }

  logOut() {
    this.authService.logout();
    location.href = "";
  }
}

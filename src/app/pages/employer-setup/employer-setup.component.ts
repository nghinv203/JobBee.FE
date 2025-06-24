import {Component} from '@angular/core';
import {CompanyInfoComponent} from './company-info/company-info.component';
import {SetupHeaderComponent} from './setup-header/setup-header.component';
import {FoundingInfoComponent} from './founding-info/founding-info.component';
import {NgIf} from '@angular/common';
import {SocialInfoComponent} from './social-info/social-info.component';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {FooterComponent} from '../../layout/main/footer/footer.component';
import {CompleteSetupComponent} from './complete-setup/complete-setup.component';

@Component({
  selector: 'app-employer-setup',
  standalone: true,
  imports: [CompanyInfoComponent,
    SetupHeaderComponent,
    FoundingInfoComponent,
    NgIf,
    SocialInfoComponent,
    ContactInfoComponent,
    FooterComponent,
    CompleteSetupComponent],
  templateUrl: './employer-setup.component.html',
  styleUrl: './employer-setup.component.scss'
})
export class EmployerSetupComponent {

  recievedMessage: string = 'company-info';

  handleMessage(message: string) {
    this.recievedMessage = message;
  }
}

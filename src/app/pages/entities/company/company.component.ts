import {Component, Input, OnInit} from '@angular/core';
import {ICompany} from './company.model';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-company',
  imports: [
    ButtonComponent,
    TranslatePipe
  ],
  standalone: true,
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {
  @Input() company: ICompany = {};
  constructor() {
  }


}

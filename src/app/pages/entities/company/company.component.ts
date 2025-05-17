import {Component, Input} from '@angular/core';
import {ICompany} from './company.model';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';

@Component({
  selector: 'app-company',
  imports: [
    ButtonComponent,
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

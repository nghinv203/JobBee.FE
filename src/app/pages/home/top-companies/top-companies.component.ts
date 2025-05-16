import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';
import {ICompany} from '../../entities/company/company.model';
import {CompanyComponent} from '../../entities/company/company.component';

@Component({
  selector: 'app-top-companies',
  imports: [
    TranslatePipe,
    ButtonComponent,
    CompanyComponent
  ],
  standalone: true,
  templateUrl: './top-companies.component.html',
  styleUrl: './top-companies.component.scss'
})
export class TopCompaniesComponent {
  companies: ICompany[] = [
    {
      id: "1",
      name: "FPT Software",
      location: "Hà Nội",
      isFeature: true,
      image: "assets/images/EmployersLogo.png"
    },
    {
      id: "2",
      name: "VNG Corporation",
      location: "TP. Hồ Chí Minh",
      isFeature: true,
      image: "assets/images/EmployersLogo.png"
    },
    {
      id: "3",
      name: "Viettel Group",
      location: "Hà Nội",
      isFeature: false,
      image: "assets/images/EmployersLogo.png"
    },
    {
      id: "4",
      name: "Tiki.vn",
      location: "TP. Hồ Chí Minh",
      isFeature: false,
      image: "assets/images/EmployersLogo.png"
    },
    {
      id: "5",
      name: "Công ty TNHH NashTech",
      location: "TP. Hồ Chí Minh",
      isFeature: true,
      image: "assets/images/EmployersLogo.png"
    },
    {
      id: "6",
      name: "CMC Corporation",
      location: "Hà Nội",
      isFeature: false,
      image: "assets/images/EmployersLogo.png"
    },
    {
      id: "7",
      name: "Haravan",
      location: "TP. Hồ Chí Minh",
      isFeature: false,
      image: "assets/images/EmployersLogo.png"
    },
    {
      id: "8",
      name: "MISA JSC",
      location: "Hà Nội",
      isFeature: true,
      image: "assets/images/EmployersLogo.png"
    }
  ];

}

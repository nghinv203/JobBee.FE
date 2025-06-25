import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';
import {ICompany} from '../../entities/company/company.model';
import {CompanyComponent} from '../../entities/company/company.component';
import {CompaniesService} from '../../../core/services/companies/companies.service';

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
export class TopCompaniesComponent implements OnInit{
  companies: ICompany[] = [];

  constructor(private companiesService: CompaniesService) {
  }

  ngOnInit(): void {
    this.companiesService.getTopCompanies({page: 1, pageSize: 8}).subscribe(res => {
      this.companies = (res.data as any).items;
    });
  }
}

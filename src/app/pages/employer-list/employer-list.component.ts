import {Component} from '@angular/core';
import {EmployerSearchComponent} from './employer-search/employer-search.component';
import {HeaderComponent} from '../../layout/main/header/header.component';
import {FooterComponent} from '../../layout/main/footer/footer.component';
import {EmployerDetailComponent} from './employer-detail/employer-detail.component';
import {TranslatePipe} from '@ngx-translate/core';
import {EmployerListService} from '../../core/services/employer-list/employer-list.service';
import {DecimalPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-employer-list',
  standalone: true,
  imports: [EmployerSearchComponent,
    HeaderComponent,
    FooterComponent,
    EmployerDetailComponent, TranslatePipe, NgForOf, DecimalPipe],
  templateUrl: './employer-list.component.html',
  styleUrl: './employer-list.component.scss'
})
export class EmployerListComponent {

  isDetail: boolean = false;
  employers: any[] = [];
  selectedEmployer: any = null;

  // Pagination state
  pageIndex = 1;
  pageSize = 5;
  totalPages = 1;

  constructor(private employerListService: EmployerListService) {}

  viewDetail(emp: any): void {
    this.selectedEmployer = emp;
    this.isDetail = true;
  }

  isCloseDetail(isClose: boolean) {
    this.isDetail = isClose;
  }

  ngOnInit(): void {
    this.loadEmployers();
  }

  loadEmployers(): void {
    this.employerListService.getPagedEmployers(this.pageIndex, this.pageSize).subscribe({
      next: (res) => {
        this.employers = res.data?.items || [];
        this.totalPages = res.data?.totalPages || 1;
      },
      error: (err) => {
        console.error('Failed to load employers', err);
      }
    });
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.pageIndex = page;
    this.loadEmployers();
  }

}

import {Component} from '@angular/core';
import {EmployerSearchComponent} from './employer-search/employer-search.component';
import {HeaderComponent} from '../../layout/main/header/header.component';
import {FooterComponent} from '../../layout/main/footer/footer.component';
import {EmployerDetailComponent} from './employer-detail/employer-detail.component';

@Component({
  selector: 'app-employer-list',
  standalone: true,
  imports: [EmployerSearchComponent,
    HeaderComponent,
    FooterComponent,
    EmployerDetailComponent],
  templateUrl: './employer-list.component.html',
  styleUrl: './employer-list.component.scss'
})
export class EmployerListComponent {

  isDetail: boolean = false;

  viewDetail() {
    this.isDetail = true;
  }

  isCloseDetail(isClose: boolean) {
    this.isDetail = isClose;
  }
}

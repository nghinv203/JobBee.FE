import {Component, EventEmitter, Output} from '@angular/core';
import {searchBarConfig} from '../../job-list/job-list.constant';
import {BreadcrumbComponent} from '../../../shared/reuseComponents/breadcrumb/breadcrumb.component';
import {SearchComponent} from '../../../shared/reuseComponents/search/search.component';
import {TranslatePipe} from '@ngx-translate/core';
import {IJobSearch} from '../../job-list/job-list.model';
import {LocationService} from '../../../shared/services/location.service';

@Component({
  selector: 'app-employer-search',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    SearchComponent,
    TranslatePipe
  ],
  templateUrl: './employer-search.component.html',
  styleUrl: './employer-search.component.scss'
})
export class EmployerSearchComponent {

  @Output() searchChange: EventEmitter<IJobSearch> = new EventEmitter<IJobSearch>();
  searchBarConfig = searchBarConfig;

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.locationService.fetchProvines()
      .pipe()
      .subscribe(res => {
        this.searchBarConfig[1].selectItems = res.data;
      });
  }

  handleSearch(event: any) {
    this.searchChange.emit(event);
  }
}

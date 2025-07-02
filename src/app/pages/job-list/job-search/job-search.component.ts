import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BreadcrumbComponent} from '../../../shared/reuseComponents/breadcrumb/breadcrumb.component';
import {TranslatePipe} from '@ngx-translate/core';
import {SearchComponent} from '../../../shared/reuseComponents/search/search.component';
import {searchBarConfig} from '../job-list.constant';
import {LocationService} from '../../../core/services/location/location.service';
import {map} from 'rxjs';
import {IJobSearch} from '../job-list.model';

@Component({
  selector: 'app-job-search',
  imports: [
    BreadcrumbComponent,
    TranslatePipe,
    SearchComponent
  ],
  standalone: true,
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.scss'
})
export class JobSearchComponent implements OnInit{

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

import {Component, EventEmitter, Output} from '@angular/core';
import {BreadcrumbComponent} from '../../../shared/reuseComponents/breadcrumb/breadcrumb.component';
import {SearchComponent} from '../../../shared/reuseComponents/search/search.component';
import {TranslatePipe} from '@ngx-translate/core';
import {IJobSearch} from '../../job-list/job-list.model';
import {LocationService} from '../../../core/services/location/location.service';
import { searchBarConfig } from '../../job-list/job-list.constant';

@Component({
  selector: 'app-candidate-search',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    SearchComponent,
    TranslatePipe
  ],
  templateUrl: './candidate-search.component.html',
  styleUrl: './candidate-search.component.scss'
})
export class CandidateSearchComponent {

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

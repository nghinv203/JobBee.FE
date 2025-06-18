import {Component, OnInit} from '@angular/core';
import {BreadcrumbComponent} from '../../../shared/reuseComponents/breadcrumb/breadcrumb.component';
import {TranslatePipe} from '@ngx-translate/core';
import {SearchComponent} from '../../../shared/reuseComponents/search/search.component';
import {searchBarConfig} from '../job-list.constant';
import {LocationService} from '../../../shared/services/location.service';
import {map} from 'rxjs';

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
  searchBarConfig = searchBarConfig;

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.locationService.fetchProvines()
      .pipe(
        map((res: any[]) => {
          const mappedData = res.map(p => ({
            id: p.code,
            name: p.name
          }));
          return {
            code: 200,
            data: mappedData,
            msg: 'Success'
          };
        })
      )
      .subscribe(res => {
        this.searchBarConfig[1].selectItems = res.data;
      });
  }
}

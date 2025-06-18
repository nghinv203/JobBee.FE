import {Component} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {SelectComponent} from '../../../shared/reuseComponents/select/select.component';
import {options, searchBarConfig, selectedItems} from './header.constanst';
import {SearchComponent} from '../../../shared/reuseComponents/search/search.component';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    SelectComponent,
    SearchComponent,
    TranslatePipe,
    NzButtonComponent,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedItems = selectedItems;
  options = options;
  searchBarConfig = searchBarConfig;
  constructor(private translateService: TranslateService) {
    const browserLanguage = localStorage.getItem('language') || 'vi';
    if(browserLanguage === 'vi') {
      this.selectedItems = options[0]
    } else if(browserLanguage === 'en') {
      this.selectedItems = options[1]
    }
  }

  hanldeSearch(event: any) {
    console.log(event);
  }

  handleChangeLanguage(event: any): void {
    this.translateService.use(`${event.value}`);
    localStorage.setItem('language', event.value);
  }
}

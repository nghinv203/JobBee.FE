import {Component} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {SelectComponent} from '../../../shared/reuseComponents/select/select.component';
import {options, selectedItems} from './header.constanst';
import {SearchComponent} from '../../../shared/reuseComponents/search/search.component';
import {ButtonComponent} from '../../../shared/reuseComponents/button/button.component';

@Component({
  selector: 'app-header',
  imports: [
    SelectComponent,
    SearchComponent,
    ButtonComponent,
    TranslatePipe,
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedItems = selectedItems;
  options = options;
  constructor(private translateService: TranslateService) {
    const browserLanguage = localStorage.getItem('language') || 'vi';
    if(browserLanguage === 'vi') {
      this.selectedItems = options[0]
    } else if(browserLanguage === 'en') {
      this.selectedItems = options[1]
    }
  }

  handleChangeLanguage(event: any): void {
    this.translateService.use(`${event.value}`);
    localStorage.setItem('language', event.value);
  }
}

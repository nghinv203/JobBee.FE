import {Component} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {SelectComponent} from '../../shared/reuseComponents/select/select.component';
import {JsonPipe} from '@angular/common';
import {options, selectedItems} from './header.constanst';
import {SearchComponent} from '../../shared/reuseComponents/search/search.component';
import {ButtonComponent} from '../../shared/reuseComponents/button/button.component';

@Component({
  selector: 'app-header',
  imports: [
    TranslatePipe,
    SelectComponent,
    SearchComponent,
    ButtonComponent,
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedItems = selectedItems;
  options = options;
  constructor(private translateService: TranslateService) {
    const browserLanguage = translateService.getBrowserLang();
    console.log(browserLanguage)
    if(browserLanguage === 'vi') {
      this.selectedItems = options[0]
    } else if(browserLanguage === 'en') {
      this.selectedItems = options[1]
    }
  }

  handleChangeLanguage(event: any): void {
    this.translateService.use(`${event.value}/global`);
  }
}

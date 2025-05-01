import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {SelectComponent} from '../../shared/reuseComponents/select/select.component';

@Component({
  selector: 'app-header',
  imports: [
    TranslatePipe,
    SelectComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedItems: {
    label: string,
    value: string,
    img: string
  }[] = [
    {
      label: 'global.languages.en',
      value: 'en',
      img: 'https://flagcdn.com/w40/us.png'
    }
  ];

  options: {
    label: string,
    value: string,
    img: string
  }[] = [
    {
      label: 'global.languages.vn',
      value: 'vn',
      img: 'https://flagcdn.com/w40/vn.png'
    },
    {
      label: 'global.languages.en',
      value: 'en',
      img: 'https://flagcdn.com/w40/us.png'
    },
  ]

  constructor(private translateService: TranslateService) {
  }

  handleChangeLanguage(event:  any): any  {
    this.options.forEach((option) => {
      if(option.value === event) {
        this.selectedItems.pop();
        this.selectedItems.push(option)
      }
    })
    this.translateService.use(`${event}/global`);
  }
}

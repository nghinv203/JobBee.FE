import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './layout/header/header.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TranslateModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const browserLanguage = translate.getBrowserLang();
    this.translate.addLangs(['vi', 'en']);
    this.translate.setDefaultLang(`${browserLanguage}/global`);
    this.translate.use(`${browserLanguage}/global`);
  }
}

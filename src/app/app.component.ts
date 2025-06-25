import {Component, OnInit} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {RouterOutlet} from '@angular/router';
import { Analytics } from "@vercel/analytics/next"

@Component({
  selector: 'app-root',
  imports: [TranslateModule, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    let language = localStorage.getItem('language')
    if(!language) {
      const browserLanguage = this.translate.getBrowserLang() || 'vi';
      localStorage.setItem('language', browserLanguage);
      language = browserLanguage;
    }
    this.translate.addLangs(['vi', 'en']);
    this.translate.setDefaultLang(`${language}`);
    this.translate.use(`${language}`);
  }
}

import {Component, HostListener, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './layout/header/header.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {window} from 'rxjs';
import {FooterComponent} from './layout/footer/footer.component';
import {MainComponent} from './layout/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TranslateModule, FooterComponent, MainComponent],
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

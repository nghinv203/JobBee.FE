import {Component, HostListener, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './layout/header/header.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {window} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TranslateModule],
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

  isHeaderHidden = false;
  private lastScrollTop = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      // scroll down
      this.isHeaderHidden = true;
    } else {
      // scroll up
      this.isHeaderHidden = false;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}

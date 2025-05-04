import {Component, HostListener} from '@angular/core';
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

  isHeaderHidden = false;
  private lastScrollTop = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

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

import {Component, HostListener} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
  ],
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isHeaderHidden = false;
  private lastScrollTop = 0;
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const currentScroll = document.documentElement.scrollTop;
  //
  //   if (currentScroll > this.lastScrollTop && currentScroll > 100) {
  //     // scroll down
  //     this.isHeaderHidden = true;
  //   } else {
  //     // scroll up
  //     this.isHeaderHidden = false;
  //   }
  //   this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  // }
}

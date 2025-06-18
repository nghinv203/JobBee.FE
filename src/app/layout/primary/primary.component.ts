import {Component, HostListener} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../main/header/header.component';

@Component({
  selector: 'app-primary',
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  standalone: true,
  templateUrl: './primary.component.html',
  styleUrl: './primary.component.scss'
})
export class PrimaryComponent {
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

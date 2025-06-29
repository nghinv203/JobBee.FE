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
  lastScrollTop = 0;
  isHeaderHidden = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll === 0) {
      this.isHeaderHidden = false;
    } else {
      this.isHeaderHidden = true;
    }

    this.lastScrollTop = currentScroll;
  }
}

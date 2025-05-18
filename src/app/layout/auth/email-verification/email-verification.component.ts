import {Component, ElementRef, ViewChild} from '@angular/core';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {TranslatePipe} from '@ngx-translate/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-email-verification',
  imports: [
    NzInputDirective,
    TranslatePipe,
    NzButtonComponent,
    FormsModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss'
})
export class EmailVerificationComponent {
  email: string = 'vannghibg03@gmail.com';
  countDown: number = 60;
  clickDisabled = false;

  @ViewChild('resend') resend!: ElementRef<HTMLAnchorElement>;

  handleSend() {
    this.clickDisabled = true;
    const text: string = this.resend.nativeElement.text;
    const color: string = this.resend.nativeElement.style.color;
    this.resend.nativeElement.setAttribute('disabled', 'true');
    this.countDown = 60;
    const interval = setInterval(() => {
      this.countDown--;
      this.resend.nativeElement.text = `${this.countDown}s`;
      this.resend.nativeElement.style.color = '#767F8C';
      if(this.countDown == 0) {
        clearInterval(interval);
        this.resend.nativeElement.text = text;
        this.resend.nativeElement.removeAttribute('disabled');
        this.resend.nativeElement.style.color = color;
        this.clickDisabled = false;
      }
    }, 1000)
  }
}

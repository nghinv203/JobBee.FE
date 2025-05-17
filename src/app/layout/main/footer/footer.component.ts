import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    TranslatePipe,
    NgTemplateOutlet
  ],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

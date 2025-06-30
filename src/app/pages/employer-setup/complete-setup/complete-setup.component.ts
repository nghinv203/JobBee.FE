import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-complete-setup',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './complete-setup.component.html',
  styleUrl: './complete-setup.component.scss'
})
export class CompleteSetupComponent {

}

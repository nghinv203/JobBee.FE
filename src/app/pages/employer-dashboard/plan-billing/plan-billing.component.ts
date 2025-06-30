import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-plan-billing',
  standalone: true,
  imports: [
    TranslatePipe,
    NgForOf
  ],
  templateUrl: './plan-billing.component.html',
  styleUrl: './plan-billing.component.scss'
})
export class PlanBillingComponent {

}

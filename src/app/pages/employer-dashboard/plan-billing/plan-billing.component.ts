import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {ShortNumberPipe} from '../../../shared/pipes/short-number/short-number.pipe';
import {PaymentService} from '../../../core/services/payment/payment.service';
import {finalize} from 'rxjs';
import {LoadingComponent} from '../../../shared/reuseComponents/loading/loading.component';

@Component({
  selector: 'app-plan-billing',
  standalone: true,
  imports: [
    TranslatePipe,
    NgForOf,
    ShortNumberPipe,
    CurrencyPipe,
    LoadingComponent
  ],
  templateUrl: './plan-billing.component.html',
  styleUrl: './plan-billing.component.scss'
})
export class PlanBillingComponent {

  isLoading = false;

  constructor(private paymentService: PaymentService) {
  }

  handleBasicSubcription(): void {
    const id = 'e732bb91-df0e-4bda-9050-6a28a46501a4';
    this.isLoading = true;
    this.paymentService.createPaymentLink(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
        window.open(res.data.checkoutUrl);
      });
  }

  handleStandardSubcription(): void {
    const id = 'db07113f-fd2b-4a82-9f4b-7138089cff5b';
    this.isLoading = true;
    this.paymentService.createPaymentLink(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
        window.open(res.data.checkoutUrl);
      });
  }

  handleAdvandSubcription(): void {
    const id = '40c54cc1-f101-4ffd-88fb-e5885d1aa243';
    this.isLoading = true;
    this.paymentService.createPaymentLink(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
        window.open(res.data.checkoutUrl);
      });
  }
}

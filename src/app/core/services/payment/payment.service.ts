import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppEnvironmentService} from '../../../app.environment.service';
import {Observable} from 'rxjs';
import {IResponse} from '../../../shared/models/response';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl!: string;

  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${this.env.HOST_PAYMENT}/payments`;
  }

  createPaymentLink(plainId: string): Observable<IResponse> {
    return this.http.post<IResponse>(`${this.baseUrl}`, { planId: plainId })
  }
}

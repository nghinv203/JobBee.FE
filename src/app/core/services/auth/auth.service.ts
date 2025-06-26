import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppEnvironmentService} from '../../../app.environment.service';
import {IResponse} from '../../../shared/models/response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl!: string;

  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${this.env.HOST_OS}/users`
  }

  register(params: any): Observable<IResponse> {
    return this.http.post<IResponse>(`${this.baseUrl}/register`, params);
  }
}

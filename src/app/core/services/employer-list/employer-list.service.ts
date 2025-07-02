import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppEnvironmentService} from '../../../app.environment.service';
import {Observable} from 'rxjs';
import {IResponse} from '../../../shared/models/response';

@Injectable({
  providedIn: 'root'
})
export class EmployerListService {
  private baseUrl!: string;
  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${this.env.HOST_OS}/employers`;
  }

  getPagedEmployers(pageIndex: number = 1, pageSize: number = 10): Observable<any> {
    const url = `${this.baseUrl}/page-result`;
    return this.http.get(url, {
      params: {
        pageIndex: pageIndex.toString(),
        pageSize: pageSize.toString()
      }
    });
  }

  getEmployerId(userId: string): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/employer-by-userId/${userId}`)
  }

}

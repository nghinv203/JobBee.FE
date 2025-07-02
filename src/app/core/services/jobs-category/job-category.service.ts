import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppEnvironmentService} from '../../../app.environment.service';
import {Observable} from 'rxjs';
import {IPopularJob} from '../../../pages/home/popular-jobs/popular-jobs.model';
import {IResponse} from '../../../shared/models/response';

@Injectable({
  providedIn: 'root'
})
export class JobCategoryService {
  private baseUrl!: string;
  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${this.env.HOST_OS}/jobCategory`;
  }

  getCategoryPopular(params: any): Observable<IResponse<IPopularJob[]>> {
    return this.http.get<IResponse<IPopularJob[]>>(`${this.baseUrl}/popular`, { params })
  }

  getAllCategory(): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/list`);
  }


}

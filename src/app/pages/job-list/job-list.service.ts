import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IResponse} from '../../shared/models/response';
import {IJob} from '../entities/job/job.model';
import {AppEnvironmentService} from '../../app.environment.service';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  baseUrl!: string;

  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = this.env.HOST_OS;
  }

  getJobs(params: any): Observable<IResponse<IJob[]>> {
    return this.http.get<IResponse<IJob[]>>(this.baseUrl, { params });
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IResponse} from '../../../shared/models/response';
import {IJob} from '../../../pages/entities/job/job.model';
import {AppEnvironmentService} from '../../../app.environment.service';
import {ICommonPosition} from '../../../pages/home/common-position/common-position.model';
import {IJobDetail} from '../../../shared/models/common';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl!: string;

  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${this.env.HOST_OS}/jobs`;
  }

  getJobs(params: any): Observable<IResponse<IJob[]>> {
    return this.http.post<IResponse<IJob[]>>(`${this.baseUrl}/search`, {params});
  }

  getCommonJobs(params: any) {
    return this.http.get<IResponse<ICommonPosition[]>>(`${this.baseUrl}/common-jobs`, { params });
  }

  getJobDetail(jobId: string) {
    return this.http.get<IResponse<IJobDetail>>(`${this.baseUrl}/${jobId}`);
  }

  postJob(job: any): Observable<IResponse> {
    return this.http.post<IResponse>(`${this.baseUrl}`, job);
  }

  getPostedJobs(employerId: string, page: number = 1, pageSize: number = 10): Observable<any> {
    const body = {
      employerId: employerId,
      keyword: '',
      isActive: true,
      page: page,
      pageSize: pageSize
    };
    return this.http.post(`${this.baseUrl}/posted-jobs`, body);
  }

}

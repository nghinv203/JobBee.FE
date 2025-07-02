import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppEnvironmentService} from '../../../app.environment.service';
import {Observable} from 'rxjs';
import {IResponse} from '../../../shared/models/response';

@Injectable({
  providedIn: 'root'
})
export class JobAlertService {
  private baseUrl!: string;
  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${this.env.HOST_OS}/jobAlerts`;
  }

  getJobAlertByCandidateId(candidateId: string, pageIndex: number, pageSize: number): Observable<IResponse> {
    const url = `${this.baseUrl}/by-candidate-id`;
    console.log('Calling:', url, 'with', { candidateId, pageIndex, pageSize });
    return this.http.get<IResponse>(url, {
      params: {
        candidateId,
        pageIndex: pageIndex.toString(),
        pageSize: pageSize.toString()
      }
    });
  }

}

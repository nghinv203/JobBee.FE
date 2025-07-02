import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {AppEnvironmentService} from '../../../app.environment.service';
import {Observable} from 'rxjs';
import {IResponse} from '../../../shared/models/response';

@Injectable({
  providedIn: 'root'
})
export class SaveJobService {
  private baseUrl!: string;
  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${this.env.HOST_OS}/savedJobs`;
  }

  saveJob(candidateId: string, jobId: string): Observable<any> {
    const url = `${this.baseUrl}/create`;
    const body = {
      candidateId,
      jobId
    };
    return this.http.post(url, body);
  }

  getSavedJobByCandidateId(candidateId: string, pageIndex: number, pageSize: number): Observable<IResponse> {
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

  deleteSavedJob(candidateId: string, jobId: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { candidateId, jobId };

    const req = new HttpRequest('DELETE', `${this.baseUrl}/delete`, body, { headers });

    return this.http.request(req);
  }


}

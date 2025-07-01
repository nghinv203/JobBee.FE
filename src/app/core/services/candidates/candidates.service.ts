import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IResponse} from '../../../shared/models/response';
import {AppEnvironmentService} from '../../../app.environment.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  private baseUrl = "";

  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${this.env.HOST_OS}`;
  }

  createCandidateResume(body: FormData): Observable<IResponse> {
    return this.http.post<IResponse>(`${this.baseUrl}/candidateResumes/create`, body);
  }

  getCandidateId(userId: string): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/candidate/get-by-user/${userId}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppEnvironmentService} from '../../../app.environment.service';
import {Observable} from 'rxjs';

export interface JobApplicationRequest {
  jobId: string;
  candidateId: string;
  resumeId: string;
  coverLetter: string;
  status: string;
  employerNotes: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobApplyService {
  private baseUrl!: string;
  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${this.env.HOST_OS}/jobApplications`;
  }

  submitApplication(application: JobApplicationRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`,application);
  }
}

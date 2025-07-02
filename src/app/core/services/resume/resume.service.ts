import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppEnvironmentService} from '../../../app.environment.service';
import {map, Observable} from 'rxjs';

export interface Resume {
  id: string;
  candidateId: string;
  fileName: string;
  filePath: string;
  fileSize: number;
  fileType: string;
  isDefault: boolean;
  createdAt: string | null;
  updatedAt: string | null;
}

interface ResumeApiResponse {
  type: string;
  status: number;
  data: Resume[];
}

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private baseUrl!: string;
  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${this.env.HOST_OS}/candidateResumes`;
  }

  getResumesByCandidateId(candidateId: string): Observable<Resume[]> {
    return this.http
      .get<ResumeApiResponse>(`${this.baseUrl}/by-candidate-id/${candidateId}`)
      .pipe(map(res => res.data));
  }

  getByCandidateId(candidateId: string): Observable<{ type: string; status: number; data: Resume[] }> {
    return this.http.get<{ type: string; status: number; data: Resume[] }>(
      `${this.baseUrl}/by-candidate-id/${candidateId}`
    );
  }

}

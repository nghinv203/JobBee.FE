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

  getCandidateIdByUser(userId: string): Observable<IResponse<string>> {
    return this.http.get<IResponse<string>>(`${this.baseUrl}/candidate/get-by-user/${userId}`);
  }

  getCandidateById(id: string) {
    return this.http.get<any>(`${this.baseUrl}/candidate/${id}`);
  }

  updateBasicInfo(candidate: {
    id: string;
    firstName: string;
    lastName: string;
    birthDate: number;
    gender: string;
  }) {
    return this.http.put(`${this.baseUrl}/candidate/update`, {
      id: candidate.id,
      firstName: candidate.firstName,
      lastName: candidate.lastName,
      birthDate: candidate.birthDate,
      gender: candidate.gender
    });
  }

  uploadProfilePicture(candidateId: string, picture: File) {
    const formData = new FormData();
    formData.append('CandidateId', candidateId);
    formData.append('ProfilePicture', picture);

    return this.http.put(`${this.baseUrl}/candidate/photo`, formData);
  }

  updateCandidateProfile(payload: any) {
    return this.http.put(`${this.baseUrl}/candidate/update`, payload);
  }


}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppEnvironmentService} from '../../../app.environment.service';
import {Observable} from 'rxjs';
import {IResponse} from '../../../shared/models/response';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  baseUrl = '';

  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${this.env.HOST_OS}/educationlevels`;
  }

  getEducations(): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/list`)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppEnvironmentService} from '../../../app.environment.service';
import {Observable} from 'rxjs';
import {IResponse} from '../../../shared/models/response';
import {ICompany} from '../../../pages/entities/company/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private baseUrl!: string;

  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.baseUrl = `${env.HOST_OS}/employers`;
  }

  getTopCompanies(params: any): Observable<IResponse<ICompany>> {
    return this.http.get<IResponse<ICompany>>(`${this.baseUrl}/top`, {params});
  }
}

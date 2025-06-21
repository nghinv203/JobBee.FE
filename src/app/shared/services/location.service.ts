import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IResponse} from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  fetchProvines(): Observable<IResponse> {
    return this.http.get<IResponse>("https://open.oapi.vn/location/provinces?page=0&size=63");
  }
}

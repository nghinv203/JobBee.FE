import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IResponse} from '../../../shared/models/response';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  fetchProvines(): Observable<IResponse> {
    return this.http.get<IResponse>("https://open.oapi.vn/location/provinces?page=0&size=63");
  }

  fetchDistrictByProvinceId(provinceId: string): Observable<IResponse> {
    return this.http.get<IResponse>(`https://open.oapi.vn/location/districts/${provinceId}?page=0&size=100`);
  }

  fetchCommuneByDistrictId(districtId: string): Observable<IResponse> {
    return this.http.get<IResponse>(`https://open.oapi.vn/location/wards/${districtId}?page=0&size=100`);
  }
}

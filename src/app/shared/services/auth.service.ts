import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {AppEnvironmentService} from '../../app.environment.service';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  // replace your API
  private apiUrl = '';

  constructor(private http: HttpClient, private env: AppEnvironmentService) {
    this.apiUrl = env.HOST_OS;
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post( `${this.apiUrl}/users/login`, credentials, {
      responseType: 'text' as 'json'
    }).pipe(
      tap((token: any) => {
        if (token) {
          this.saveToken(token);
        }
      })
    );
  }

  forgetPassword(email: string): Observable<any> {
    const payload = { email };
    return this.http.put(`${this.apiUrl}/users/forget`, payload);
  }

  resetPassword(data: {
    token: string;
    email: string;
    password: string;
    confirmPassword: string;
  }): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/reset`, data);
  }

  changePassword(data: {
    email: string;
    oldPassword: string;
    password: string;
    confirmPassword: string;
  }): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/change-password`, data);
  }


  private saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getUserInfo(): JwtPayload | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<JwtPayload>(token);
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }

  getUserId(): string | null {
    return this.getUserInfo()?.sub ?? null;
  }

  getEmail(): string | null {
    return this.getUserInfo()?.email ?? null;
  }

  getRole(): string | null {
    return this.getUserInfo()?.role ?? null;
  }


}

interface JwtPayload {
  sub: string;        // User ID (GUID)
  email: string;
  role: string;
  exp: number;
  iss: string;
  aud: string;
}


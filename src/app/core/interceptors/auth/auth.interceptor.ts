import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const authToken = authService.getToken();

  const publicEndpoints = ['/api/login', '/api/register'];

  const isPublicEndpoint = publicEndpoints.some(endpoint => req.url.includes(endpoint));

  let authReq = req;
  if (authToken && !isPublicEndpoint) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }

  return next(authReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        console.error('Unauthorized request:', error);
      }
      return throwError(() => error);
    })
  );
};

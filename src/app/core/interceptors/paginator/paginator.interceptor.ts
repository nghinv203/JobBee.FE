import { HttpInterceptorFn } from '@angular/common/http';

export const paginatorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

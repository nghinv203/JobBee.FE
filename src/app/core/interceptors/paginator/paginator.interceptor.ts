import { HttpInterceptorFn, HttpParams } from '@angular/common/http';

const PAGINATION_URLS = ['/api/jobs/search'];

interface RequestBody {
  params?: Record<string, any>;
  page?: number;
  pageSize?: number;
}

export const paginatorInterceptor: HttpInterceptorFn = (req, next) => {
  if (PAGINATION_URLS.some(url => req.url.includes(url))) {
    if (req.method === 'GET') {
      let modifiedParams = req.params;
      if (!modifiedParams.has('page')) {
        modifiedParams = modifiedParams.set('page', '1');
      }
      if (!modifiedParams.has('pageSize')) {
        modifiedParams = modifiedParams.set('pageSize', '20');
      }
      return next(req.clone({ params: modifiedParams }));
    } else if (req.method === 'POST') {
      const body: RequestBody = req.body || {};
      const params = body.params || {};
      console.log(body)
      const modifiedBody = {
        ...params,
        page: params['page'] ?? body.page ?? 1,
        pageSize: params['pageSize'] ?? body.pageSize ?? 20
      };

      return next(req.clone({ body: modifiedBody }));
    }
  }
  return next(req);
};

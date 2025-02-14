import { HttpInterceptorFn } from '@angular/common/http';
import { apiConfig } from '../config';

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({ url: `${apiConfig.baseUrl}/${req.url}` });
  return next(apiReq);
};

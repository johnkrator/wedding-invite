import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
// import { AuthService } from '../services';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // const authService = inject(AuthService);
  {
    // const token = authService.token();
    const token = '';
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next(req);
  }
};

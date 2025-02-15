import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';

import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';

import { routes } from './app.routes';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { urlInterceptor } from './interceptors/url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideToastr({
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right',
      timeOut: 5000,
    }),
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([tokenInterceptor, urlInterceptor])
    ), provideAnimationsAsync(),
  ],
};

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
<<<<<<< HEAD
    provideHttpClient(withFetch())
=======
    provideHttpClient()
>>>>>>> 138c42e (Uwaaa)
  ]
};

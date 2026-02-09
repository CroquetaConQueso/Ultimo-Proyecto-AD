import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
<<<<<<< HEAD
import { App } from './app/app';

bootstrapApplication(App, appConfig)
=======
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, appConfig)
>>>>>>> 138c42e (Uwaaa)
  .catch((err) => console.error(err));

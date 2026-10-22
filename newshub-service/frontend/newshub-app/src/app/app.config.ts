import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/auth/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';

//export const appConfig: ApplicationConfig = {
//  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes)],
//};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNativeDateAdapter(), // или provideDateFnsAdapter(), provideLuxonDateAdapter() или provideMomentDateAdapter()
    //provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor])),
    // Signals-first: OnPush включён по умолчанию в v22
  ],
};

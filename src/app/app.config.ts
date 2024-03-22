import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing, withRouterConfig, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withViewTransitions(),
      withDebugTracing(),
      withRouterConfig({paramsInheritanceStrategy: 'always'})),   
  provideClientHydration(), provideHttpClient(), 
  provideHttpClient(withFetch())]
};

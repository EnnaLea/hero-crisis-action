import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { PreloadAllModules, Route, Routes, provideRouter, withDebugTracing, withPreloading, withRouterConfig, withViewTransitions } from '@angular/router';
import routes from './app/app.routes';

import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SelectivePreloadingStrategyService } from './app/selective-preloading-strategy.service';




bootstrapApplication(AppComponent,
  {
    providers: [
      importProvidersFrom(FormsModule,CommonModule),
      provideAnimations(),
      provideHttpClient(),
      provideRouter(routes,
         withViewTransitions(),
         withDebugTracing(),
         withRouterConfig({paramsInheritanceStrategy: 'always'}),
         withPreloading(SelectivePreloadingStrategyService) //preload strategy
         ),
    ],
  }

  )
  .catch((err) => console.error(err));

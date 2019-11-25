import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

import { GoogleTagManagerService, GoogleTagManagerErrorHandler } from 'factor-utils';
import { NavigationModule } from 'factor-navigation';
import { CommonModule as FactorCommonModule } from 'factor-common';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { versionInfo } from '../version-info';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContributingComponent } from './core/contributing/contributing.component';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

export function appInitializer(
  googleTagManagerService: GoogleTagManagerService
) {
  return () => {
    // Inserta código de seguimiento Google Tag Manager
    googleTagManagerService.appendTrackingCode(environment.googleTagManager.trackingCode);
    // Muestra versión en consola
    console.log(`${versionInfo.npmPackage.name} ${versionInfo.git.raw}`);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContributingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
    NavigationModule,
    FactorCommonModule.forRoot({ icon: { path: 'assets/factoricons/symbols', collection: 'factoricons-regular' } })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [GoogleTagManagerService],
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GoogleTagManagerErrorHandler
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: hljsLanguages
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

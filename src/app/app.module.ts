import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule as FactorCommonModule } from 'factor-common';
import { NavigationModule } from 'factor-navigation';
import { InputsModule } from 'factor-inputs';

import { CoreModule } from './core/core.module';
import { IconsModule } from './icons/icons.module';
import { GuidelinesModule } from './guidelines/guidelines.module';
import { TemplatesModule } from './templates/templates.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], {
      scrollPositionRestoration: 'enabled'
    }),
    FactorCommonModule.forRoot({ icon: { path: 'assets/icons-library/symbols', collection: 'factoricons-regular' } }),
    NavigationModule,
    CoreModule,
    IconsModule,
    GuidelinesModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule as FactorCommonModule } from 'factor-common';
import { NavigationModule } from 'factor-navigation';
import { InputsModule } from 'factor-inputs';
import { TemplatesRoutingModule } from './templates-routing.module';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    BasicFormComponent,
    LoginComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    FactorCommonModule,
    NavigationModule
  ]
})
export class TemplatesModule { }

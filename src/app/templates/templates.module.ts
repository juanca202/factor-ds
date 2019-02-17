import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { StyleGuideComponent } from './style-guide/style-guide.component';

@NgModule({
  declarations: [StyleGuideComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }

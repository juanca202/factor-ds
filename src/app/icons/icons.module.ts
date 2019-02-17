import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModule as FactorCommonModule } from 'factor-common';

import { IconsRoutingModule } from './icons-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [OverviewComponent, SearchComponent],
  imports: [
    CommonModule,
    IconsRoutingModule,
    FactorCommonModule
  ]
})
export class IconsModule { }

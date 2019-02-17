import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorComponent } from './color/color.component';
import { SpacingComponent } from './spacing/spacing.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: 'guidelines/color', component: ColorComponent },
  { path: 'guidelines/spacing', component: SpacingComponent },
  { path: 'guidelines/typography', component: TypographyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelinesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorComponent } from './color/color.component';
import { SpacingComponent } from './spacing/spacing.component';
import { TypographyComponent } from './typography/typography.component';
import { MotionComponent } from './motion/motion.component';

const routes: Routes = [
  { path: 'design-system/guidelines/color', component: ColorComponent },
  { path: 'design-system/guidelines/spacing', component: SpacingComponent },
  { path: 'design-system/guidelines/typography', component: TypographyComponent },
  { path: 'design-system/guidelines/motion', component: MotionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelinesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorComponent } from './color/color.component';
import { SpacingComponent } from './spacing/spacing.component';
import { TypographyComponent } from './typography/typography.component';
import { MotionComponent } from './motion/motion.component';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
  { path: 'color', component: ColorComponent },
  { path: 'spacing', component: SpacingComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'motion', component: MotionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelinesRoutingModule { }

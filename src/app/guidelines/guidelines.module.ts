import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidelinesRoutingModule } from './guidelines-routing.module';
import { ColorComponent } from './color/color.component';
import { TypographyComponent } from './typography/typography.component';
import { SpacingComponent } from './spacing/spacing.component';
import { MotionComponent } from './motion/motion.component';

@NgModule({
  declarations: [
    ColorComponent,
    TypographyComponent,
    SpacingComponent,
    MotionComponent
  ],
  imports: [
    CommonModule,
    GuidelinesRoutingModule
  ]
})
export class GuidelinesModule { }

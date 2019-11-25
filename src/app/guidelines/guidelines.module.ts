import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { GuidelinesRoutingModule } from './guidelines-routing.module';
import { ColorComponent } from './color/color.component';
import { TypographyComponent } from './typography/typography.component';
import { SpacingComponent } from './spacing/spacing.component';
import { MotionComponent } from './motion/motion.component';
import { IconsComponent } from './icons/icons.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    ColorComponent,
    TypographyComponent,
    SpacingComponent,
    MotionComponent,
    IconsComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    GuidelinesRoutingModule,
    SharedModule
  ]
})
export class GuidelinesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SelectComponent } from './select/select.component';
import { RatingComponent } from './rating/rating.component';
import { ProgressComponent } from './progress/progress.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    OverviewComponent,
    IconComponent,
    ImageComponent,
    FilePickerComponent,
    TextInputComponent,
    TextAreaComponent,
    SelectComponent,
    RatingComponent,
    ProgressComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ]
})
export class ComponentsModule { }

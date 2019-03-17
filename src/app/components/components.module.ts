import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModule as FactorCommonModule } from 'factor-common';
import { InputsModule } from 'factor-inputs';

import { ComponentsRoutingModule } from './components-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    OverviewComponent,
    IconComponent,
    ImageComponent,
    FilePickerComponent,
    TextInputComponent,
    TextAreaComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FactorCommonModule,
    InputsModule
  ]
})
export class ComponentsModule { }

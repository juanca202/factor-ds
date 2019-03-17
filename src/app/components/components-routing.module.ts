import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SelectComponent } from './select/select.component';
import { FilePickerComponent } from './file-picker/file-picker.component';

const routes: Routes = [
  { path: 'design-system/components', component: OverviewComponent },
  { path: 'design-system/components/icon', component: IconComponent },
  { path: 'design-system/components/image', component: ImageComponent },
  { path: 'design-system/components/text-input', component: TextInputComponent },
  { path: 'design-system/components/text-area', component: TextAreaComponent },
  { path: 'design-system/components/select', component: SelectComponent },
  { path: 'design-system/components/file-picker', component: FilePickerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

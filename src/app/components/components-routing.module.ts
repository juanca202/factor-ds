import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SelectComponent } from './select/select.component';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { RatingComponent } from './rating/rating.component';
import { ProgressComponent } from './progress/progress.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'icon', component: IconComponent },
  { path: 'image', component: ImageComponent },
  { path: 'text-input', component: TextInputComponent },
  { path: 'text-area', component: TextAreaComponent },
  { path: 'select', component: SelectComponent },
  { path: 'file-picker', component: FilePickerComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'message', component: MessageComponent },
  { path: 'progress', component: ProgressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

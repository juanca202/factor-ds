import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StyleGuideComponent } from './style-guide/style-guide.component';

const routes: Routes = [
  { path: 'templates/style-guide', component: StyleGuideComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }

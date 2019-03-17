import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'design-system/templates', component: OverviewComponent },
  { path: 'design-system/templates/basic-form', component: BasicFormComponent },
  { path: 'design-system/templates/login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }

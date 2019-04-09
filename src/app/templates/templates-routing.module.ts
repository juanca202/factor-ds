import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { LoginComponent } from './login/login.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'design-system/templates', component: OverviewComponent },
  { path: 'design-system/templates/basic-form', component: BasicFormComponent },
  { path: 'design-system/templates/login', component: LoginComponent },
  { path: 'design-system/templates/infinite-scroll', component: InfiniteScrollComponent },
  { path: 'design-system/templates/calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }

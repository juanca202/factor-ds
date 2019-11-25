import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { LoginComponent } from './login/login.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'infinite-scroll', component: InfiniteScrollComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }

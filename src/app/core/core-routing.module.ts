import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContributingComponent } from './contributing/contributing.component';

const routes: Routes = [
    {path: '', redirectTo: '/design-system', pathMatch: 'full'},
    {path: 'design-system', component: HomeComponent},
    {path: 'design-system/about', component: AboutComponent},
    {path: 'design-system/contributing', component: ContributingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

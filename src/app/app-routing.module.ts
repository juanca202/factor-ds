import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContributingComponent } from './core/contributing/contributing.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contributing', component: ContributingComponent},
  {
    path: 'guidelines',
    loadChildren: () => import('src/app/guidelines/guidelines.module').then(mod => mod.GuidelinesModule)
  },
  {
    path: 'components',
    loadChildren: () => import('src/app/components/components.module').then(mod => mod.ComponentsModule)
  },
  {
    path: 'templates',
    loadChildren: () => import('src/app/templates/templates.module').then(mod => mod.TemplatesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

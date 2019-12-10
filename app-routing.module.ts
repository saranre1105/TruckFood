import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrucksComponent } from './trucks/trucks.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trucks/new', component: NewComponent },
  { path: 'trucks', component: TrucksComponent, children: [
    { path: 'edit/:id', component: EditComponent }
  ]},

  { path: '', pathMatch: 'full', redirectTo: '/'},
  { path:'**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
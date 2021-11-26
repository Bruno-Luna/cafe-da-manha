import { CafeUpdateComponent } from './cafe-crud/cafe-update/cafe-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CafeCrudComponent } from './cafe-crud/cafe-crud.component';
import { HomeComponent } from './home/home.component';
import { CafeCreateComponent } from './cafe-crud/cafe-create/cafe-create.component';
import { CafeDeleteComponent } from './cafe-crud/cafe-delete/cafe-delete.component';

const routes: Routes = [

  {path: '', component: HomeComponent},

  {path: 'home', component: HomeComponent},
  {path: 'cafe', component: CafeCrudComponent},
  {path: 'cafe/create', component: CafeCreateComponent },
  {path: 'cafe/update/:id', component: CafeUpdateComponent},
  {path: 'cafe/delete/:id', component: CafeDeleteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

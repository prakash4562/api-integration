import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from "./add-resto/add-resto.component";
import {UpdateRestoComponent} from "./update-resto/update-resto.component";
import {LoginComponent} from "./login/login.component";
import {ListRestoComponent} from "./list-resto/list-resto.component";
import {RegisterComponent} from "./register/register.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'add', component: AddRestoComponent },
  { path: 'update/:id', component: UpdateRestoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListRestoComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

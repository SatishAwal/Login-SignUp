import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  RegistrationGuard,AuthGuard} from "./guards/index";
import { HomeComponent, LoginComponent, SignupComponent} from "./components/index";
import {  User} from "./models/index";

 const routes:Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',   component: HomeComponent,canActivate:[AuthGuard]},
   { path: 'login', component: LoginComponent, canActivate: [RegistrationGuard]},
   { path: 'signup', component: SignupComponent, canActivate: [RegistrationGuard]},
]

@NgModule({
  exports: [RouterModule],
  imports: [
   RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }

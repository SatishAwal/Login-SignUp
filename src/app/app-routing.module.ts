import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  RegistrationGuard,AuthGuard} from "./guards/index";
import { HomeComponent, LoginComponent, SignupComponent, UserListComponent, ParentComponent} from "./components/index";
import {  User} from "./models/index";

 const routes:Routes=[
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
   { path: 'parent', component: ParentComponent, canActivate: [AuthGuard] },
  { path: 'parent',   component: UserListComponent,canActivate:[AuthGuard]},
   { path: 'login', component: LoginComponent, canActivate: [RegistrationGuard]},
   { path: 'signup', component: SignupComponent, canActivate: [RegistrationGuard]},
   { path: 'parent', component: ParentComponent, canActivate: [AuthGuard]},
]

@NgModule({
  exports: [RouterModule],
  imports: [
   RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }

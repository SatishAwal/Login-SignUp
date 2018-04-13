import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent,LoginComponent} from './components/index'

const routes:Routes=[
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent},
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
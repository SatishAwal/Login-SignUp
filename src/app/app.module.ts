import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationService, HttpClient, UserListService} from './services/index';
import {HomeComponent, LoginComponent, SignupComponent, UserListComponent, FooterComponent,
  HeaderComponent, ParentComponent, ProfileComponent} from './components/index';

import {RegistrationGuard,AuthGuard} from './guards/index';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    UserListComponent,
    FooterComponent,
    HeaderComponent,
    ParentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, AppRoutingModule
  ],
  providers: [AuthenticationService, UserListService, HttpClient, AuthGuard, RegistrationGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }

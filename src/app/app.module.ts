import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AuthenticationService, HttpClient} from './services/index';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent, LoginComponent } from './components/index';

import {AuthGuard} from './guards/index'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule, AppRoutingModule
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }

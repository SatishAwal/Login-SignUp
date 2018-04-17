import { Component, OnInit } from '@angular/core';
import {  AuthenticationService} from "../../services/index";

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title="Home"
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logoutClick(){
    this.authenticationService.logout()
    this.router.navigate(['/login'])
  }
}

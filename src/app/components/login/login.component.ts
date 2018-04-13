import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthenticationService} from '../../services/index'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {
    email: '',
    password: ''
  };
  loginErr: string = "";
  success:boolean;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

onSubmit(form:NgForm){

  console.log("User", this.user)

  this.authenticationService.login(this.user).subscribe(response=>{
    console.log("Response:",response)
    console.log("Response:",response.message)
    response})
  
  
}
}

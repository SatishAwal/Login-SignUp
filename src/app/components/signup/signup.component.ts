import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService} from '../../services/index'
import { User} from "../../models/model.user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser:User={
    firstName:'',
    lastName:'',
    email:'',
    password:''
  };
  success:boolean;

  constructor(private authenticationService: AuthenticationService,
  private router:Router) { }

  ngOnInit() {
    //Converts string to Object
    var loggedInUser = JSON.parse(localStorage.getItem('loggedinUser'));
    if (loggedInUser) {
      this.router.navigate(['/parent']);
    } else {
      this.authenticationService.logout();
    }

  }
  onSubmit(form: NgForm) {
    console.log("New User->", this.newUser)
    this.authenticationService.signup(this.newUser).subscribe(response => {
      console.log("Response", response)

      if(response.success){
        this.router.navigate(['/parent'])
      }else{
        form.reset()
      }
    })
  }
}

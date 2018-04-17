import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  returnUrl:String;
  loginErr: string = "";
  success:boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    var loggedInUser=JSON.parse(localStorage.getItem('loggedinUser'));
    if(loggedInUser){
      this.router.navigate(['/home']);
    } else{
      this.authenticationService.logout();
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
  }

onSubmit(form:NgForm){

    this.authenticationService.login(this.user).subscribe(response=>{
        console.log("Response",response)
        if(response.success){
        this.router.navigate(['/home']);
       }else{
         form.reset();
       } 
    })
  }
}

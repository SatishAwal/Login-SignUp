import { Component, OnInit ,Input ,EventEmitter,Output} from '@angular/core';
import { AuthenticationService } from "../../../services/index";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //Value set from other Component
  //tokenExist:boolean
  parseTokenObj:any;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.parseToken()
  }

parseToken(){
  const token = JSON.parse(localStorage.getItem("loggedInUser"));
  if(token){
    //this.tokenExist=true
   this.parseTokenObj =token
   console.log("parseToken:",this.parseTokenObj)
    return this.parseTokenObj
  }else{
    console.error()
  }
  
}

  logoutClick() {
    this.authenticationService.logout()
    this.router.navigate(['/login'])
  }
}

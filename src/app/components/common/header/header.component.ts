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
  tokenExist:boolean

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


  logoutClick() {
    this.authenticationService.logout()
    this.router.navigate(['/login'])
  }
}

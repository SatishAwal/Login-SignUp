import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    if (localStorage.getItem('loggedInUser')) {
      // logged in so return true
      return true;
    }
    this.router.navigate(['/login'],{ queryParams: { returnUrl: state.url } })
    return false
  }

}

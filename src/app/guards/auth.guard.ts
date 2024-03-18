import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

//A guard that checks if a user is authenticated before allowing them access to a route.
export class AuthGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly userService: UserService) { 

    }

  //canActive determines if the route can be activated
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): 
    | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree>
    | boolean 
    | UrlTree {

      //Checks if a user is authenticated (user is available in UserService). 
      //If authenticated, allow access to the route, if not, redirect to login page.
      if (this.userService.user) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
}

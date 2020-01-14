import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from './auth.service';
import { AppSettings } from '../app.settings';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // Bypass token authentication
    this.router.navigate(['dashboard']);
    return true;


    
    // If implmenting token based authentication
    // this will be passed from the route config
    // on the data property
    const token = localStorage.getItem('token');

    if (token == null || !this.auth.isAuthenticated()) {
        this.router.navigate(['login/login']);
        return false;
    }

    // decode the token to get its payload
    try {
      const tokenPayload = jwt_decode(token);
      if (!this.isAllowed(route.data, tokenPayload.user)) {
        this.router.navigate(['dashboard']);
      }

    } catch (error) {
        console.log(error);
        this.router.navigate(['login/login']);
        return false;
    }

    return true;
  }

  isAllowed(data, user) {
    return true;
  }
}

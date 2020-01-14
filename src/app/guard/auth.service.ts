import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public isAuthenticated(): boolean {
    return true;

    // Enable when using token based Authentication
    //return localStorage.getItem('token') == null ? false : true;
  }
}

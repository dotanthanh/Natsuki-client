import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private tokenKey = 'token';

  // declare for using HttpClient (communicate with the server by HTTP protocols)
  constructor( private http: HttpClient,
               private router: Router ) {}

  // signing in, passing to the function credentials - object containing
  // username and password for the request body
  signIn(credentials: Object) {
    const request = this.http.post('http://localhost:3000/signin', credentials);
    // make the request and subscribe for response
    return request;
  }

  // check if the app is currently authenticated
  isAuthenticated() {
    return tokenNotExpired() ;
  }

  // signing up, pass to the function user info
  // username, password and email for the request body
  signUp(credentials: Object) {
    // make the request and subscribe for response
    const request = this.http.post('http://localhost:3000/signup', credentials);
    return request;
  }

  // save token to localstorage, function to inject to form component to handle
  // token handlings
  saveToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }

  // signing out - delete the token in the localstorage
  signOut() {
    localStorage.removeItem(this.tokenKey);
    console.log(this.router.url);
    if (this.router.url === '/dashboard') {
      this.router.navigate( [''] );
    }
  }

  getToken() {
    return localStorage.getItem( this.tokenKey );
  }
}

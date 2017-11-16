import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private tokenKey: string = 'natsuki-token';

  // declare for using HttpClient (communicate with the server by HTTP protocols)
  constructor(private http: HttpClient){}

  // signing in, passing to the function credentials - object containing
  // username and password for the request body
  signIn(credentials: Object){
    const request = this.http.post('http://localhost:3000/signin', {
      username: 'tanthanh',
      password: 'tough'
    }, {
    // headers: new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }),
  });
    // make the request and subscribe for response
    request.subscribe(token => {
      // save the token to localStorage for authentiation
      localStorage.setItem(this.tokenKey, JSON.stringify(token));
    })
  }

  // check if the app is currently authenticated
  isAuthenticated(){
    const token = localStorage.getItem(this.tokenKey);
    return token!=null;
  }

}

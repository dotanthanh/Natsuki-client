import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {

  hostname = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  // function take in the path where user make the request and
  // make the appropriate request to the server to get the searched events

  search(query) {
    const request = this.http.get( this.hostname + 'events/' + query);
    return request;
  }

  getDashboardInfo() {
    const request = this.http.get( this.hostname + 'dashboard' );
    return request;
  }

}

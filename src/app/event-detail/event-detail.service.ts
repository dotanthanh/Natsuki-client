import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class EventDetailService {

  private hostname = 'http://natsuki.herokuapp.com/';
  private event;
  eventChanged = new Subject<any>();
  private jwt = new JwtHelper();

  constructor( private http: HttpClient,
               private authService: AuthService ) {
    this.event = {
      id: '',
      category: '',
      end_time: '',
      start_time: '',
      host: '',
      name: '',
      participants: [],
      status: ''
    };
  }

  requestEventById(id: String) {

    const request = this.http.get(this.hostname + 'events/byid/' + id);

    // make the request and waiting for response
    request.subscribe((result) => {

      // set the found event to our local storage
      this.event = result;
      // dispatch change to other sources of subscription
      this.eventChanged.next( Object.assign({}, this.event) );

    }, (errorResponse) => {

      // display error message
      console.log(errorResponse);

    });
  }

  // get local event object
  getEvent() {
    return Object.assign({}, this.event);
  }

  doJoinEvent(action) {
    if (this.authService.isAuthenticated) {
      const decodedToken = this.jwt.decodeToken(this.authService.getToken());

      // modify our local event object
      this.event = Object.assign({}, this.event, {
        participants: [ ...this.event.participants, {
          id: decodedToken.id,
          user: decodedToken.username
        }]
      });

      // prepare body object for http request
      const bodyObject = {
        id: this.event._id,
        action: action
      };
      // request the server to update the document of this event object
      this.http.put(this.hostname + 'events/edit/join', bodyObject)
               .subscribe(
        (newToken) => {
          this.authService.saveToken(newToken);
          this.eventChanged.next( Object.assign({}, this.event) );
        }, errorResponse => console.log(errorResponse)
      );

    } else {
      alert('please sign in to join this event');
    }

  }

  doSaveEvent(action) {
    if (this.authService.isAuthenticated) {
      const decodedToken = this.jwt.decodeToken(this.authService.getToken());

      // prepare body bject
      const bodyObject = {
        id: this.event._id,
        action: action
      };

      // request the server to update the document of this event object
      this.http.put(this.hostname + 'events/edit/save', bodyObject)
               .subscribe(
        (newToken) => {
          this.authService.saveToken(newToken);
          this.eventChanged.next( Object.assign({}, this.event) );
        }, errorResponse => console.log(errorResponse)
      );

    } else {
      alert('please sign in to save this event');
    }

  }

}

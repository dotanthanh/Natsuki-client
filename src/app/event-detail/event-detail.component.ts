import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventDetailService } from './event-detail.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  private event;
  private subscription: Subscription;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private eventService: EventDetailService,
               private authService: AuthService ) { }

  ngOnInit() {
    // get the id from navigated route
    const eventId = this.route.snapshot.params.id;

    this.eventService.requestEventById(eventId);

    // initialize local event object
    this.event = this.eventService.getEvent();

    // subscribe to changes made to local version of event in event-service
    this.subscription = this.eventService.eventChanged.subscribe(
      (event) => {
        this.event = Object.assign({}, event, {
          start_time: event.start_time.substring(0, 16).replace('T', ' '),
          end_time: event.end_time.substring(0, 16).replace('T', ' ')
        });
      }
    );
  }


  // function to find if the signed in user joined/saved/hosted the event or not
  didActionEvent(list) {
    const decodedToken = this.authService.decodeToken();
    if ( decodedToken[list] === undefined ) {
      return false;
    } else {
      return decodedToken[list].indexOf(this.event._id) > -1;
    }
  }


  // function to find current status of the event (opening/upcoming/closed...)
  getStatus() {
    const start = new Date(this.event.start_time).getTime();
    const end = new Date(this.event.end_time).getTime();
    if ( start > Date.now() ) {
      return 'upcoming';
    } else if ( start <= Date.now() && Date.now() < end ) {
      return 'opening';
    } else {
      return 'closed';
    }
  }


  // function to let user join/quit an event
  toggleJoin() {
    // condition to verify if user are trying to join or quit the event
    if ( this.didActionEvent('joined_events') ) {
      this.eventService.doJoinEvent('pull');
    } else {
      this.eventService.doJoinEvent('push');
    }
  }


  // function to let user save/unsave an event
  toggleSave() {
    // condition to verify if user are trying to save or unsave the event
    if ( this.didActionEvent('saved_events') ) {
      this.eventService.doSaveEvent('pull');
    } else {
      this.eventService.doSaveEvent('push');
    }
  }

}

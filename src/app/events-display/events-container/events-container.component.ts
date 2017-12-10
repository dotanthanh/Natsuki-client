import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { EventService } from '../events.service';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.css']
})
export class EventsContainerComponent implements OnInit {

  private subscription: Subscription;
  private events = [];

  constructor( private eventService: EventService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {
    // get the subscription and wait for changes made to our list of events
    this.subscription = this.eventService.eventsChanged.subscribe(
      (events) => {
        this.events = events;
      }
    );

    // get initial value for events list
    this.events = this.eventService.getEvents();

    console.log(this.route);
    console.log(this.router);

    const keyword = this.route.snapshot.queryParams.keyword;
    console.log(keyword);
    
    this.eventService.requestEvent( keyword );
  }

}

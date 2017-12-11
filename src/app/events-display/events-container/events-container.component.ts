import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.css']
})
export class EventsContainerComponent implements OnInit {

  private subscription: Subscription;
  public events = [];
  private sortMode = 'all' || 'bytime';

  constructor( private eventService: EventsService,
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

  // function to sort the list of events before displaying
  sort() {
    switch (this.sortMode) {
      case 'bytime':
        // return a new array of sort elements by start_time
        return this.events.slice().sort(
          (event1, event2) => {
            const event1_startTime = new Date(event1.start_time).getTime();
            const event2_startTime = new Date(event2.start_time).getTime();
            if ( event1_startTime < event2_startTime ) {
              return -1;
            } else if ( event1_startTime > event2_startTime ) {
              return 1;
            } else {
              return 0;
            }
          }
        );
      default:
        return this.events;
    }
  }

  // function to change sort mode, switch between 2 mode
  switchSortMode(mode) {
    this.sortMode = mode;
  }

}

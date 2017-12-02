import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../events-display/events.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  query: String = '';

  constructor( private router: Router,
               private eventService: EventService ) { }

  ngOnInit() {
  }

  // take the search input, query-ize it and prepare for request to server
  // ( redirect to result page )
  search() {
    // process the keywords
    const query = this.query.replace(' ', '+');

    this.router.navigate( ['events/search'], { queryParams: { keyword: query } } );

    if ( this.router.url.indexOf('/events/') > -1 ) {
      this.eventService.requestEvent(query);
    }
  }

}

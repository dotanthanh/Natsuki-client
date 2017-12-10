import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { DataStorageService } from '../services/data-storage.service';

@Injectable()
export class EventsService {

  private events = [] ;
  eventsChanged = new Subject<any>();

  constructor( private dataService: DataStorageService ) {}

  getEvents() {
    return this.events.slice();
  }

  requestEvent(query) {
    this.dataService.search(query).subscribe(
      (result: any) => {
        this.events = result;
        this.eventsChanged.next( this.events.slice() );
      }
    );
  }

}

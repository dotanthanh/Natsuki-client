import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DataStorageService } from '../services/data-storage.service';

@Injectable()
export class DashboardService {

  // where you store the information about the current logged in user
  private user = {
      username: '',
      friends: [],
      hosted_events: [],
      joined_events: [],
      saved_events: [],
    };


  // this variable is to subscribe to (for any change made to it) ,
  // so we can update the view later on syncronously
  infoChanged = new Subject<any>();

  constructor( private dataService: DataStorageService ) { }


  // call the request to the server and get the information
  // ( ex: user's hosted events, saved events, ... )
  requestDashboardInfo() {
    this.dataService.getDashboardInfo().subscribe(
      (result: any) => {
        this.user = result;

        // notify that there are changes happened to our old user's information
        // and get updated with the new info
        // Object.assign is to return an object exactly the same with our user's info object
        this.infoChanged.next( Object.assign({}, this.user) );
      }
    );
  }


  // return a copy of our current user's info object
  getUserInfo() {
    return Object.assign({}, this.user);
  }

}

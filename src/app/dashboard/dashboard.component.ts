import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private subscription: Subscription;

  // object contain all user info
  private user;
  // mode of displaying event
  private mode = 'active' || 'hosted' || 'joined' || 'saved';

  constructor(private dashboardService: DashboardService) { }


  // get the information when render the view to display
  // through service defined earlier ( DashboardService )
  ngOnInit() {

    this.subscription = this.dashboardService.infoChanged.subscribe(
      (info) => {
        this.user = info;
        console.log(info);
      }
    );

    // get initial value of user's info ( can be updated with changes later )
    this.user = this.dashboardService.getUserInfo();

    this.dashboardService.requestDashboardInfo();

  }

  // function to switch the tab and display different set of events

  switchTab(event) {

    // identify which tab was clicked on
    const current_class = event.target.classList[0];
    // change the mode according to the tab get clicked with switch case
    switch (current_class) {
      case 'hosted':
        this.mode = 'hosted';
        break;
      case 'joined':
        this.mode = 'joined';
        break;
      case 'saved':
        this.mode = 'saved';
        break;
      default:
        this.mode = 'active';
        break;
    }
  }

  // function to filter the events by mode
  filter(mode) {
    switch (mode) {
      case 'hosted':
        return this.user.hosted_events;
      case 'joined':
        return this.user.joined_events;
      case 'saved':
        return this.user.saved_events;
      default:
        // combine all events and then filter all events that haven't started yet
        const all = [...this.user.hosted_events, ...this.user.joined_events, ...this.user.saved_events];
        return all.filter( event => event.start_time > Date.now() );
    }
  }

}

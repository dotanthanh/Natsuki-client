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

  private user: {
    username: String,
    friends: {friend_id: String}[],
    hosted_events: {event_id: String}[],
    joined_events: {event_id: String}[],
    saved_events: {event_id: String}[],
  };

  constructor(private dashboardService: DashboardService) { }


  // get the information when render the view to display
  // through service defined earlier ( DashboardService )
  ngOnInit() {

    this.subscription = this.dashboardService.infoChanged.subscribe(
      (info) => {
        this.user = info;
      }
    );

    // get initial value of user's info ( can be updated with changes later )
    this.user = this.dashboardService.getUserInfo();

    this.dashboardService.requestDashboardInfo();

  }

}

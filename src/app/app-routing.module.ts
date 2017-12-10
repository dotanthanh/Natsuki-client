import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { SigninFormComponent } from './signin/signin-form/signin-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsDisplayComponent } from './events-display/events-display.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'signin', component: SigninFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-event', component: NewEventComponent },
  { path: 'events', children: [
    { path: 'search', component: EventsDisplayComponent },
    { path: 'id/:id', component: EventDetailComponent }

    // unsupported routes for now

    // { path: '', component: EventsDisplayComponent },
    // { path: 'category/:type', component: EventsDisplayComponent },
    // { path: 'hot', component: EventsDisplayComponent },

  ] }
  // route for error
  // { path: 'timeout', component: Unauthorized }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

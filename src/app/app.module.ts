import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ng2-modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HotEventsComponent } from './hot-events/hot-events.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { UtilsService } from './services/utils.service';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NewEventComponent } from './new-event/new-event.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { SigninFormComponent } from './signin/signin-form/signin-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryListComponent,
    HotEventsComponent,
    FooterComponent,
    HeaderUserComponent,
    SearchBarComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    NewEventComponent,
    SignupFormComponent,
    SigninFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

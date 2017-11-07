import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HotEventsComponent } from './hot-events/hot-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryListComponent,
    HotEventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

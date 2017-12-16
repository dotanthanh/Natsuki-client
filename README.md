# Client side - Natsuki

This is the client-side for a web app called Natsuki. The app is most like a small social network but for creating events and gatherings for different communities.

The application is deployed and live at : https://natsuki.herokuapp.com/

## How to run locally

### Run
1. Navigate into the folder (in command line/terminal)
2. Run `npm install` to install all required dependencies
3. Run `ng serve` to start the development build scripts
4. The application is now running at : http://localhost:4200
5. If you want to see how the application work with connection to server, put the whole client-side to a folder in natsuki-server project folder, build and run normally. ( run `ng build --aot -prod` to build )

## Techs used

* Angular 4 with Bootstrap and supported components:
  * [ngx-modal](https://github.com/Greentube/ngx-modal)
  * [angular2-jwt](https://github.com/auth0/angular2-jwt)
* Specific necessary features are supported by angular (Guard, Service, Interceptors)

## Features

* Authentication fully works (sign up, sign in, sign out), including authentication protection for personal page
* Search bar available at any route for searching, route for displaying search results implements
* Search results can be sort based on time
* Validation for forms are implemented (for example, when log in or sign up)
* Page for individual event available, `join` and `save` buttons work, with instant update to database. List of participants can be shown
* Personal page displays info of users' events which are sorted in different ways
* Creating new events works. For now users can do all the basic actions with the application for practical (and its initial) purposes

## Features to implement

* Haven't separated authenticated personal page display and other users' pages
* Layout for displaying a single event in search return page is currently broken
* No functionality for feedback form
* Users can't add each other for now
* No route for daily feeds (hot events, categories page)
* Edit mode is not established (for users' and events' information)   

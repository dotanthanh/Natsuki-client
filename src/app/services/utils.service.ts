import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() {}

  // check if the device is desktop
  largeSize() {
    // get the window size
    const size = window.innerWidth;
    // return true or false depend on the size of the window
    if (size <= 767) {
      return false;
    } else {
      return true;
    }
  }

  // check if the current pathname is /signup
  inSignUpLink() {
    // get the window location href
    const href = window.location.pathname;
    // return true or false depend on the size of the window
    if (href === '/signup') {
      return true;
    } else {
      return false;
    }
  }
}

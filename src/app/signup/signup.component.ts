import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  largeSize(){
    var size = window.innerWidth;
    if (size<=767){
      return false;
    }
    else {
      return true;
    }
  }
}

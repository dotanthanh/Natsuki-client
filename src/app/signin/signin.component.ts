import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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

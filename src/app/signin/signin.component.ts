import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private utils: UtilsService) { }

  ngOnInit() {}

  // check the viewport size to upadte the layout
  largeSize() {
    return this.utils.largeSize();
  }

  inSignInLink() {
    return this.utils.inSignInLink();
  }
}

import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private utils: UtilsService) { }

  ngOnInit() {}

  // check the viewport size to upadte the layout
  largeSize() {
    return this.utils.largeSize();
  }

  inSignUpLink() {
    return this.utils.inSignUpLink();
  }
}

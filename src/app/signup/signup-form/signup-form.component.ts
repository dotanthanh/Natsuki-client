import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl('tanthanh'),
      'password': new FormControl('something'),
      'email': new FormControl('gandalf@middle.earth'),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  inSignUpLink() {
    return this.utils.inSignUpLink();
  }

}

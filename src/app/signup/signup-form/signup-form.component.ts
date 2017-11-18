import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;
  state = '' || 'success' || 'failed' ;
  responseMessage = '';
  errorMessage = '';

  constructor( private utils: UtilsService,
               private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  // submit the signup form
  onSubmit() {
    const request = this.authService.signUp({
      username: this.signupForm.controls.username.value,
      password: this.signupForm.controls.password.value,
      email: this.signupForm.controls.email.value,
    });
    // control the flow error/success with the response object here
    // return error if the request is rejected
    // return the success messageage ( in body ) if the account is created
    request.subscribe(
      (response: any ) => {
        this.state = 'success';
        this.responseMessage = response.message ;
      }, errorResponse => {
        this.state = 'failed';
        this.errorMessage = errorResponse.error.message;
      });
  }

  inSignUpLink() {
    return this.utils.inSignUpLink();
  }

}

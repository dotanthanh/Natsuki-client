import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

  signinForm: FormGroup;
  failed: boolean;
  errorMessage = '';

  constructor( private utils: UtilsService,
               private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
    this.failed = false;
  }

  // submit the signup form
  onSubmit() {
    const request = this.authService.signIn({
      username: this.signinForm.controls.username.value,
      password: this.signinForm.controls.password.value
    });
    // handle the case when the request is successful - a token is returned
    //    and the when the request has error - save error message to display to UI
    request.subscribe(token => {
      this.authService.saveToken(token);
    }, errorResponse => {
      this.failed = true;
      this.errorMessage = errorResponse.error.message;
    });
  }

  inSignInLink() {
    return this.utils.inSignInLink();
  }

}

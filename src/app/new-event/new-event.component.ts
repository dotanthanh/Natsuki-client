import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  private form: FormGroup;

  constructor( private dataStorage: DataStorageService,
               private authService: AuthService,
               private router: Router ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'eventName': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'category': new FormControl(null, [Validators.required]),
      'startTime': new FormControl(null, [Validators.required]),
      'endTime': new FormControl(null, [Validators.required])
    });
  }

  // function to handle submission
  // create desired object from form controls and pass to
  // asynchronous function in authentication service to make the request

  onSubmit() {
    const eventObject = Object.assign(this.form.value, {
      startTime: new Date(this.form.value.startTime),
      endTime: new Date(this.form.value.endTime),
    });

    this.dataStorage.submitEvent(eventObject).subscribe(
      // we expect response Object to contain new token and
      // new event's id
      (responseObject: any) => {

        // reset the token
        this.authService.saveToken(responseObject.token);
        alert('You created event ' + this.form.value.eventName );
        this.router.navigate(['/events/id/' + responseObject.data]);
      }, (errorResponse) => {

        // deal with the error here
        console.log(errorResponse);
      }
    );
  }

}

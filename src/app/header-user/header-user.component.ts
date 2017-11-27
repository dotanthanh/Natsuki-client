import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // call the method in authentication service to log out
  signOut() {
    this.authService.signOut();
  }

}

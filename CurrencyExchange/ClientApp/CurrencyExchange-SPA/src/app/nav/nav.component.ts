import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Logged in succesfully');
      }, error => {
        console.log('Failed to login');
      }
    );
  }

  loggedIn() {
    console.log(this.authService.loggedIn());
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
  }

}

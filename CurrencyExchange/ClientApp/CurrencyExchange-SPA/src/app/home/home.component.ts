import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  roles: any;
  test = 'test';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRoles();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  // getUsers() {
  //   this.http.get('http://localhost:5003/api/users').subscribe(response => {
  //     this.users = response;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  getRoles() {
    this.http.get('http://localhost:5003/api/roles').subscribe(response => {
      this.roles = response;
    }, error => {
      console.log(error);
    });
  }

}

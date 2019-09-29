import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  systemPassword: any;
  readonly mainPassword = 'test';
  model: any = {};
  isAdmin = false;
  roles: any;

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.getRoles();
  }

  register() {
    this.authService.register(this.model).subscribe( () => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    });
  }


  cancel() {
    console.log('canseled');
  }


  onChange($event) {
    if ($event === 'Admin') { this.isAdmin = true; } else { this.isAdmin = false; }
  }

  checkMainPassword() {

  }

  getRoles() {
    this.http.get('http://localhost:5003/api/roles').subscribe(response => {
      this.roles = response;
      console.log(this.roles);
    }, error => {
      console.log(error);
    });
  }
}

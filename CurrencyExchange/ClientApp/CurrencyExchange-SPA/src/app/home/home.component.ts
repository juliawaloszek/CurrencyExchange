import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrenciesService } from '../_services/currencies.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  users: User[];

  constructor(private http: HttpClient,
              private currenciesService: CurrenciesService,
              private userService: UserService ) { }

  ngOnInit() {
    this.currenciesService.getCurrencies();
    this.userService.getUsers();
    console.log('getUsers');
    // loadCurrencies();
    // console.log(this.getUsers());

    this.loadUsers();


  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>('http://localhost:5003/api/users');
  // }

  // loadCurrencies() {
  //   this.getUsers().subscribe((model: any[]) => {
  //     this.model = model;
  //     console.log(this.model);
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      console.log(users);
    }, error => {
      console.log(error);
    });
  }



}

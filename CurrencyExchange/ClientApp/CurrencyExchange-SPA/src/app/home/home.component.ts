import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrenciesService } from '../_services/currencies.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  model: any;

  constructor(private http: HttpClient,
              private currenciesService: CurrenciesService ) { }

  ngOnInit() {
    this.currenciesService.getCurrencies();
    console.log('getUsers');
    this.loadCurrencies();
    console.log(this.getUsers());


  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5003/api/users');
  }

  loadCurrencies() {
    this.getUsers().subscribe((model: any[]) => {
      this.model = model;
      console.log(this.model);
    }, error => {
      console.log(error);
    });
  }



}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrenciesService } from '../_services/currencies.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerMode = false;

  constructor(private http: HttpClient,
              private currenciesService: CurrenciesService ) { }

  ngOnInit() {
    this.currenciesService.getCurrencies();

  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }



}

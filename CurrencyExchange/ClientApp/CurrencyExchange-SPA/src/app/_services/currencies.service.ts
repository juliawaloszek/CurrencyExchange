import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Currency } from '../_models/currency';
import { Wallet } from '../_models/wallet';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
baseUrl = 'http://webtask.future-processing.com:8068/currencies';
proxyurl = 'https://cors-anywhere.herokuapp.com/';

constructor(private http: HttpClient) { }

getCurrencies(): Observable<Currency[]> {
  return this.http.get<Currency[]>(this.proxyurl + this.baseUrl);
}

}

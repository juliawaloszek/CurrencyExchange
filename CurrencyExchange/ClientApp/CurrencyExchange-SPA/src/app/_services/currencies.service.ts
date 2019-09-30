import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
baseUrl = 'http://webtask.future-processing.com:8068/currencies';
proxyurl = 'https://cors-anywhere.herokuapp.com/';

constructor(private http: HttpClient) { }

getCurrencies() {
  this.http.get(this.proxyurl + this.baseUrl)
    .subscribe((res) => {
    console.log(res);
  });
}

}

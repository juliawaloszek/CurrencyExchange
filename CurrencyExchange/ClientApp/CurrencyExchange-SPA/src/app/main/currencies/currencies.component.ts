import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CurrenciesService } from 'src/app/_services/currencies.service';
import { Currency } from 'src/app/_models/currency';

const DEFAULT_DATA: Currency[] = [
  {name: 'US Dollar', code: 'USD', unit: 1, purchasePrice: 	3.7473, sellPrice: 	3.7563, averagePrice: 3.7518},
  {name: 'Euro', code: 'EUR', unit: 1, purchasePrice: 4.2, sellPrice: 4.2447, averagePrice: 3.9942},
  {name: 'Swiss Franc', code: 'CHF', unit: 1, purchasePrice: 3.2, sellPrice: 3.8913, averagePrice: 	3.8806},
  {name: 'Russian ruble', code: 'RUB', unit: 100, purchasePrice: 7.2, sellPrice: 7.2652, averagePrice: 	7.5872},
  {name: 'Czech koruna', code: 'CZK', unit: 100, purchasePrice: 15.2, sellPrice: 15.1595, averagePrice: 15.1309},
  {name: 'Pound sterling', code: 'GBP', unit: 1, purchasePrice: 5.2, sellPrice: 5.6669, averagePrice: 5.6585}
];

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  displayedColumns: string[] = ['code', 'unit', 'purchasePrice' ];
  rawData: any;
  publicationDate: any;
  currencies: Currency[] = DEFAULT_DATA;
  dataSource = this.currencies;

  constructor( private currenciesService: CurrenciesService,
               private changeDetectorRefs: ChangeDetectorRef ) { }

  ngOnInit() {
    this.loadCurrencies();
    this.refresh();

  }

  loadCurrencies() {
    this.currenciesService.getCurrencies().subscribe((currencies: Currency[]) => {
      this.currencies = currencies.items;
      console.log(this.currencies);
    }, error => {
      console.log(error);
    });
  }


  refresh() {
    this.currenciesService.getCurrencies().subscribe(res => {
       this.dataSource = res.items;
    });
    this.changeDetectorRefs.detectChanges();
   }



}

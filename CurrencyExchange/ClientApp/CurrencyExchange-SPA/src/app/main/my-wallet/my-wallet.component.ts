import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/_models/currency';
import { AuthService } from 'src/app/_services/auth.service';

const DEFAULT_DATA: Currency[] = [
  {name: 'US Dollar', code: 'USD', unit: 1, purchasePrice: 	3.7473, sellPrice: 	3.7563, averagePrice: 3.7518},
  {name: 'Euro', code: 'EUR', unit: 1, purchasePrice: 4.2, sellPrice: 4.2447, averagePrice: 3.9942},
  {name: 'Swiss Franc', code: 'CHF', unit: 1, purchasePrice: 3.2, sellPrice: 3.8913, averagePrice: 	3.8806},
  {name: 'Russian ruble', code: 'RUB', unit: 100, purchasePrice: 7.2, sellPrice: 7.2652, averagePrice: 	7.5872},
  {name: 'Czech koruna', code: 'CZK', unit: 100, purchasePrice: 15.2, sellPrice: 15.1595, averagePrice: 15.1309},
  {name: 'Pound sterling', code: 'GBP', unit: 1, purchasePrice: 5.2, sellPrice: 5.6669, averagePrice: 5.6585}
];

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css']
})
export class MyWalletComponent implements OnInit {

  displayedColumns: string[] = ['code', 'unit', 'purchasePrice', 'actions' ];
  dataSource = DEFAULT_DATA;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}

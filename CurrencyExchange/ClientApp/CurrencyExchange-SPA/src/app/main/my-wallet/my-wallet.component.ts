import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/_models/currency';
import { AuthService } from 'src/app/_services/auth.service';

const DEFAULT_DATA: any[] = [
  {name: 'US Dollar', code: 'USD', unit: 1, purchasePrice: 	3.7473, sellPrice: 	3.7563, averagePrice: 3.7518, amount: 100, value: 100},
  {name: 'Euro', code: 'EUR', unit: 1, purchasePrice: 4.2, sellPrice: 4.2447, averagePrice: 3.9942, amount: 100, value: 100},
  {name: 'Swiss Franc', code: 'CHF', unit: 1, purchasePrice: 3.2, sellPrice: 3.8913, averagePrice: 	3.8806, amount: 100, value: 100},
  {name: 'Russian ruble', code: 'RUB', unit: 100, purchasePrice: 7.2, sellPrice: 7.2652, averagePrice: 	7.5872, amount: 100, value: 100},
  {name: 'Czech koruna', code: 'CZK', unit: 100, purchasePrice: 15.2, sellPrice: 15.1595, averagePrice: 15.1309, amount: 100, value: 100},
  {name: 'Pound sterling', code: 'GBP', unit: 1, purchasePrice: 5.2, sellPrice: 5.6669, averagePrice: 5.6585, amount: 100, value: 100}
];

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css']
})
export class MyWalletComponent implements OnInit {

  displayedColumns: string[] = ['code', 'unit', 'purchasePrice', 'amount', 'value', 'actions' ];
  dataSource = DEFAULT_DATA;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}

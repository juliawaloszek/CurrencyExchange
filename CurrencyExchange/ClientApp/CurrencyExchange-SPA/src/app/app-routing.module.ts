import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrenciesComponent } from './main/currencies/currencies.component';
import { MyWalletComponent } from './main/my-wallet/my-wallet.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'currencies', component: CurrenciesComponent},
  { path: 'my-wallet', component: MyWalletComponent},
  { path: 'main', component: MainComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


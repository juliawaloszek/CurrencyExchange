import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrenciesComponent } from './main/currencies/currencies.component';
import { MyWalletComponent } from './main/my-wallet/my-wallet.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        { path: 'currencies', component: CurrenciesComponent},
        { path: 'my-wallet', component: MyWalletComponent},
        { path: 'main', component: MainComponent, canActivate: [AuthGuard]},
    ]
},
   { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


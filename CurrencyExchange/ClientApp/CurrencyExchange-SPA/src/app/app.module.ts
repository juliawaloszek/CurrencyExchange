import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CurrenciesComponent } from './main/currencies/currencies.component';
import { MyWalletComponent } from './main/my-wallet/my-wallet.component';
import { MainComponent } from './main/main.component';
import { CurrenciesService } from './_services/currencies.service';




@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      CurrenciesComponent,
      MyWalletComponent,
      MainComponent
   ],
   imports: [
      NgbModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      FormsModule,
      MatTableModule
   ],
   providers: [
      AuthService,
      CurrenciesService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

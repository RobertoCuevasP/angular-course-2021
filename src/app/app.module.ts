import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WalletsService } from './services/wallets.service';
import { TransactionsService } from './services/transactions.service';

@NgModule({
  declarations: [AppComponent, TransactionComponent, WalletComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [WalletsService, TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

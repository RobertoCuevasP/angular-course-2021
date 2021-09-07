import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionsService } from './services/transactions.service';
import { WalletsService } from './services/wallets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  wallets = [];
  transactions = [];
  walletSubs: Subscription;
  transactionsSubs: Subscription;

  constructor(
    private walletsService: WalletsService,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit() {
    this.loadTransaction();
    this.loadWallet();
  }

  loadTransaction() {
    this.transactions = [];
    this.transactionsSubs = this.transactionsService
      .getTransactions()
      .subscribe(res => {
        Object.entries(res).map((p: any) =>
          this.transactions.push({ id: p[0], ...p[1] })
        );
      });
  }

  loadWallet() {
    this.wallets = [];
    this.walletSubs = this.walletsService.getWallets().subscribe(res => {
      Object.entries(res).map((p: any) =>
        this.wallets.push({ id: p[0], ...p[1] })
      );
    });
  }

  mine() {}

  totalCoin(t: string) {
    return this.wallets.reduce(
      (acc, value) => acc + (value[t] > 0 ? value[t] : 0),
      0
    );
  }

  transactionStatus(): boolean {
    const aux = this.transactions.filter(
      t => t.mineType === 'PoS' && t.miner < 20
    );

    return this.transactions.length === aux.length;
  }
}

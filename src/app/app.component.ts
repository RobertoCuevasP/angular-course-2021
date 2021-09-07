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

  mine(transaction: any, i: string): void {
    //Encontrar origen y destinatario en arreglos

    const indexFROM = this.wallets.findIndex(
      w => w.wallet === transaction.from
    );
    const indexTO = this.wallets.findIndex(w => w.wallet === transaction.to);

    const indexTrans = this.transactions.findIndex(
      t => t.id === transaction.id
    );

    //Calculo nuevos ingresos

    let calcFrom: number =
      this.wallets[indexFROM][transaction.moneyType] - transaction.quantity;

    let calcTo: number =
      this.wallets[indexTO][transaction.moneyType] + transaction.quantity;

    //Utilizar Patch
    //Verificar si es ETH o BTC
    console.log('Origen ', this.wallets[indexFROM].id);
    console.log('Destino ', this.wallets[indexTO].id);

    if (transaction.moneyType === 'eth' || transaction.moneyType === 'ETH') {
      this.walletsService
        .patchWallet(this.wallets[indexFROM].id, {
          eth: calcFrom
        })
        .subscribe(res => console.log(res));

      this.walletsService
        .patchWallet(this.wallets[indexTO].id, {
          eth: calcTo
        })
        .subscribe(res => console.log(res));
    } else {
      //BTC
      this.walletsService
        .patchWallet(this.wallets[indexFROM].id, {
          btc: calcFrom
        })
        .subscribe(res => console.log(res));

      this.walletsService
        .patchWallet(this.wallets[indexTO].id, {
          btc: calcTo
        })
        .subscribe(res => console.log(res));
    }

    //Delete a la transaccion
    console.log('Transaction ID: ', this.transactions[indexTrans].id);
    this.transactionsService.deleteTransaction(
      this.transactions[indexTrans].id
    );
    this.loadTransaction();
    this.loadWallet();
  }

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

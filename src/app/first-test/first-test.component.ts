import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent implements DoCheck {
  wallets = [
    { wallet: 'MARIA123', name: 'maria', eth: 0, btc: 2 },
    { wallet: 'JUAN123', name: 'juan', eth: 5, btc: 0 },
    { wallet: 'LUCAS123', name: 'lucas', eth: 6, btc: 3 },
    { wallet: 'MARCOS123', name: 'marcos', eth: 0, btc: 2 },
    { wallet: 'PEDRO123', name: 'pedro', eth: 1, btc: 0 },
    { wallet: 'JUANA123', name: 'juana', eth: 10, btc: 12 }
  ];
  transactions = [
    {
      date: '2019-09-07T15:50+00Z ',
      from: 'MARIA123',
      to: 'JUANA123',
      quantity: 2,
      moneyType: 'btc',
      mineType: 'PoW',
      miner: 5
    },
    {
      date: '2019-09-07T15:50+00Z ',
      from: 'JUAN123',
      to: 'PEDRO123',
      quantity: 2,
      moneyType: 'eth',
      mineType: 'PoS',
      miner: 21
    },
    {
      date: '2019-09-07T15:50+00Z ',
      from: 'LUCAS123',
      to: 'MARCOS123',
      quantity: 2,
      moneyType: 'btc',
      mineType: 'PoW',
      miner: 5
    },
    {
      date: '2019-09-07T15:50+00Z ',
      from: 'MARCOS123',
      to: 'LUCAS123',
      quantity: 2,
      moneyType: 'eth',
      mineType: 'PoS',
      miner: 10
    },
    {
      date: '2019-09-07T15:50+00Z ',
      from: 'PEDRO123',
      to: 'JUAN123',
      quantity: 2,
      moneyType: 'btc',
      mineType: 'PoW',
      miner: 5
    },
    {
      date: '2019-09-07T15:50+00Z ',
      from: 'JUANA123',
      to: 'MARIA123',
      quantity: 2,
      moneyType: 'eth',
      mineType: 'PoS',
      miner: 30
    },
    {
      date: '2019-09-07T15:50+00Z ',
      from: 'MARIA123',
      to: 'JUANA123',
      quantity: 2,
      moneyType: 'btc',
      mineType: 'PoW',
      miner: 2
    },
    {
      date: '2019-09-07T15:50+00Z ',
      from: 'JUAN123',
      to: 'PEDRO123',
      quantity: 2,
      moneyType: 'eth',
      mineType: 'PoS',
      miner: 15
    },
    {
      date: '2019-09-07T15:50+00Z ',
      from: 'LUCAS123',
      to: 'MARCOS123',
      quantity: 2,
      moneyType: 'btc',
      mineType: 'PoW',
      miner: 3
    },
    {
      date: '2019-09-07T15:50+00Z ',
      from: 'MARCOS123',
      to: 'LUCAS123',
      quantity: 2,
      moneyType: 'eth',
      mineType: 'PoS',
      miner: 5
    }
  ];

  totalEth: number = 0;
  totalbtc: number = 0;

  constructor() {}

  transaction(person: JSON) {
    const auxFrom = this.wallets.find(item => item.wallet === person.from);
    const auxTo = this.wallets.find(item => item.wallet === person.to);

    if (person.moneyType === 'btc') {
      auxFrom.btc -= person.quantity;
      auxTo.btc += person.quantity;
    } else {
      auxFrom.eth -= person.quantity;
      auxTo.eth += person.quantity;
    }

    /*this.transactions = this.transactions.forEach((element, index) => {
      if (element.from === person.from) this.transactions.splice(index, 1);
    });*/
  }
}

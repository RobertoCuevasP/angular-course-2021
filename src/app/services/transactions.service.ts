import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionsService {
  constructor(private http: HttpClient) {}

  public getTransactions(): Observable<any> {
    return this.http.get(
      `https://bitcoin-test-a0874-default-rtdb.firebaseio.com/transactions.json`
    );
  }

  public createTransaction(body: any): Observable<any> {
    return this.http.post(
      `https://bitcoin-test-a0874-default-rtdb.firebaseio.com/transactions.json`,
      body
    );
  }

  public updateTransaction(id: string, body: any): Observable<any> {
    return this.http.put(
      `https://bitcoin-test-a0874-default-rtdb.firebaseio.com/transactions.json/${id}.json`,
      body
    );
  }

  public patchTransaction(id: string, body: any): Observable<any> {
    return this.http.patch(
      `https://bitcoin-test-a0874-default-rtdb.firebaseio.com/transactions.json/${id}.json`,
      body
    );
  }

  public deleteTransaction(id: string): Observable<any> {
    return this.http.delete(
      `https://bitcoin-test-a0874-default-rtdb.firebaseio.com/transactions.json/${id}.json`
    );
  }
}

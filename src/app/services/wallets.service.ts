import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WalletsService {
  constructor(private http: HttpClient) {}

  public getWallets(): Observable<any> {
    return this.http.get(
      `https://bitcoin-test-a0874-default-rtdb.firebaseio.com/wallets.json`
    );
  }

  public createWallets(body: any): Observable<any> {
    return this.http.post(
      `https://bitcoin-test-a0874-default-rtdb.firebaseio.com/wallets.json`,
      body
    );
  }

  public updateWallets(id: string, body: any): Observable<any> {
    return this.http.put(
      `https://bitcoin-test-a0874-default-rtdb.firebaseio.com/wallets/${id}.json`,
      body
    );
  }

  public patchWallets(id: string, body: any): Observable<any> {
    return this.http.patch(
      `https://bitcoin-test-a0874-default-rtdb.firebaseio.com/wallets/${id}.json`,
      body
    );
  }

  public deleteWallets(id: string): Observable<any> {
    return this.http.delete(
      `https://bitcoin-test-a0874-default-rtdb.firebaseio.com/wallets/${id}.json`
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class WalletsService {
  baseUrl = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getWallets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/wallets.json`);
  }

  public updateWallet(id: string, body: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/wallets/${id}.json`, body);
  }

  public patchWallet(id: string, body: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/wallets/${id}.json`, body);
  }

  public deleteWallet(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/wallets/${id}.json`);
  }
}

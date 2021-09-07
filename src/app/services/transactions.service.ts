import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class TransactionsService {
  baseUrl = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getTransactions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/transactions.json`);
  }

  public updateTransaction(id: string, body: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/transactions/${id}.json`, body);
  }

  public patchTransaction(id: string, body: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/transactions/${id}.json`, body);
  }

  public deleteTransaction(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/transactions/${id}.json`);
  }
}

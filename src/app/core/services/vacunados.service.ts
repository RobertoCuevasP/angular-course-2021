import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class VacunadosService {
  constructor(private http: HttpClient) {}

  public listVacunados(): Observable<any> {
    return this.http.get(
      `https://vaccines-test-default-rtdb.firebaseio.com/vaccinated.json`
    );
  }

  public postVacunados(body: any): Observable<any> {
    return this.http.post(
      `https://vaccines-test-default-rtdb.firebaseio.com/vaccinated.json`,
      body
    );
  }

  public patchVacunados(id: string, body: any): Observable<any> {
    return this.http.patch(
      `https://vaccines-test-default-rtdb.firebaseio.com/vaccinated/${id}.json`,
      body
    );
  }

  public deleteVacunados(id: string): Observable<any> {
    return this.http.delete(
      `https://vaccines-test-default-rtdb.firebaseio.com/vaccinated/${id}.json`
    );
  }
}

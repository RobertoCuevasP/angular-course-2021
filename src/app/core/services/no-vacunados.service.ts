import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NoVacunadosService {

  constructor(private http: HttpClient) { }

  public listNoVacunados():Observable<any>{
    return this.http.get(`https://vaccines-test-default-rtdb.firebaseio.com/unvaccinated.json`);
  }

  
  public postNoVacunados(body: any):Observable<any> {
    return this.http.post(`https://vaccines-test-default-rtdb.firebaseio.com/unvaccinated.json`, body);
  }


public patchNoVacunados(id:string, body: any): Observable<any>{
  return this.http.patch(`https://vaccines-test-default-rtdb.firebaseio.com/unvaccinated/${id}.json`, body);
}

public deleteNoVacunados(id: string):Observable<any>{
  return this.http.delete(`https://vaccines-test-default-rtdb.firebaseio.com/unvaccinated/${id}.json`);
}

}
}
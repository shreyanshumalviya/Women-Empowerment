import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface NgoList {
  ngoId: number;
  name: String;
  email: String;
  address: String;
  description: String;
  contact: String;
  verified: Boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AdminNgoService {
  apiUrl = 'http://localhost:9090/adminngo/viewall';
  apiUrl1 = 'http://localhost:9090/adminngo/update';
  constructor(private httpClient: HttpClient) {}

  GetNgoList(): Observable<NgoList[]> {
    return this.httpClient.get<NgoList[]>(this.apiUrl);
  }
  verify(ngoId): Observable<boolean> {
    return this.httpClient.put<boolean>(
      'http://localhost:9090/adminngo/verify/' + ngoId,
      null
    );
  }
  UpdateNgoList(): Observable<NgoList[]> {
    return this.httpClient.get<NgoList[]>(this.apiUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SukanyaList {
  accountId: number;
  beneficiaryName: String;
  dob: any;
  adharNo: number;
  registrationDate: any;
  verified: Boolean;
  sukanyaDoc: any;
  user: any;
}
@Injectable({
  providedIn: 'root',
})
export class AdminSukanyaService {
  apiUrl = 'http://localhost:9090/adminsukanya/viewall';
  constructor(private httpClient: HttpClient) {}
  GetSukanyaList(): Observable<SukanyaList[]> {
    return this.httpClient.get<SukanyaList[]>(this.apiUrl);
  }
  verify(accountId): Observable<boolean> {
    return this.httpClient.put<boolean>(
      'http://localhost:9090/adminsukanya/verify/' + accountId,
      null
    );
  }
  getUserData(accountId): Observable<any> {
    return this.httpClient.get(
      'http://localhost:9090/adminsukanya/viewSukanyaDoc/' + accountId
    );
  }
  UpdateNgoList(): Observable<SukanyaList[]> {
    return this.httpClient.get<SukanyaList[]>(this.apiUrl);
  }
  downloadDocument(link: string): Observable<string> {
    return this.httpClient.post(
      'http://localhost:9090/adminngo/downloadFile',
      link,
      { responseType: 'text' }
    );
  }
}

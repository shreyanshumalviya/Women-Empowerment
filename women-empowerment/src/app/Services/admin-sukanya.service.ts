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
  UpdateNgoList(): Observable<SukanyaList[]> {
    return this.httpClient.get<SukanyaList[]>(this.apiUrl);
  }
}

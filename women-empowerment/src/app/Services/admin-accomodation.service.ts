import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
String;
export interface AccomodationList {
  accomodationId: number;
  name: String;
  state: String;
  city: String;
  addressLine1: String;
  addressLine2: String;
  pincode: String;
  landmark: String;
  totalRoom: number;
  roomAvailable: number;
  capacity: number;
  dayCareCentre: boolean;
  ngo: any;
  accomodationStatuses: any;
  accomodation: any;
}
@Injectable({
  providedIn: 'root',
})
export class AdminAccomodationService {
  apiUrl = 'http://localhost:9090/adminaccomodation/viewall';
  constructor(private httpClient: HttpClient) {}
  GetSukanyaList(): Observable<AccomodationList[]> {
    return this.httpClient.get<AccomodationList[]>(this.apiUrl);
  }
  // UpdateNgoList(): Observable<AccomodationList[]> {
  //   return this.httpClient.get<AccomodationList[]>(this.apiUrl);
  // }
}

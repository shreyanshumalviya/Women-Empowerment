import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserList {
  userId: number;
  firstName: String;
  middleName: String;
  lastName: String;
  email: String;
  password: String;
  contactNo: number;
  aadhaarNo: number;
  panNo: number;
  dob: any;
  gender: any;
  jobStatus: any;
  jobTitle: String;
  salary: String;
  residenceArea: String;
  maritalStatus: any;
  disabled: any;
  verified: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AdminUserService {
  apiUrl = 'http://localhost:9090/adminuser/viewall';
  constructor(private httpClient: HttpClient) {}
  GetSukanyaList(): Observable<UserList[]> {
    return this.httpClient.get<UserList[]>(this.apiUrl);
  }
  UpdateUserList(): Observable<UserList[]> {
    return this.httpClient.get<UserList[]>(this.apiUrl);
  }
  getUserData() {
    return this.httpClient.get('http://localhost:9090/adminuser/viewall');
  }
}

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

  verify(userId): Observable<boolean> {
    return this.httpClient.put<boolean>(
      'http://localhost:9090/adminuser/verify/' + userId,
      null
    );
  }

  getUserData() {
    return this.httpClient.get('http://localhost:9090/adminuser/viewall');
  }
  downloadDocument(link: string): Observable<string> {
    return this.httpClient.post(
      'http://localhost:9090/adminuser/downloadFile',
      link,
      { responseType: 'text' }
    );
  }
}

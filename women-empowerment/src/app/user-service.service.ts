import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamilyMember } from './family-member';
import { UpdateDocument } from './update-document';
import { UpdatePasswordDetails } from './update-password-details';
import { UserDocumentDetails } from './user-document-details';
import { UserId } from './user-id';
import { UserLogin } from './user-login';
import { UserProfileDetails } from './user-profile-details';
import { UserRegisterDetails } from './user-register-details';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private httpClient: HttpClient) {}

  loginUser(userLoginData: UserLogin): Observable<boolean> {
    return this.httpClient.post<boolean>(
      'http://localhost:9090/users/userLogin',
      userLoginData
    );
  }

  registerUser(userRegisterData: UserRegisterDetails): Observable<boolean> {
    return this.httpClient.post<boolean>(
      'http://localhost:9090/users/signup',
      userRegisterData
    );
  }

  getUserDetails(userId: UserId): Observable<UserProfileDetails> {
    return this.httpClient.post<UserProfileDetails>(
      'http://localhost:9090/users/userDetails',
      userId
    );
  }

  updateUserDetails(user: UserProfileDetails): Observable<UserProfileDetails> {
    return this.httpClient.post<UserProfileDetails>(
      'http://localhost:9090/users/updateProfile',
      user
    );
  }

  updateUserPassword(
    userPasswordDetails: UpdatePasswordDetails
  ): Observable<boolean> {
    return this.httpClient.post<boolean>(
      'http://localhost:9090/users/changePassword',
      userPasswordDetails
    );
  }

  resetPassword(userId: UserId): Observable<boolean> {
    return this.httpClient.post<boolean>(
      'http://localhost:9090/users/forgotPassword',
      userId
    );
  }

  addFamilyMember(familyMember: FamilyMember): Observable<FamilyMember> {
    return this.httpClient.post<FamilyMember>(
      'http://localhost:9090/users/addFamilyMember',
      familyMember
    );
  }

  getFamilyMembers(userId: UserId): Observable<FamilyMember[]> {
    return this.httpClient.post<FamilyMember[]>(
      'http://localhost:9090/users/getFamilyDetails',
      userId
    );
  }

  uploadDocument(document: FormData): Observable<string> {
    return this.httpClient.post(
      'http://localhost:9090/document/upload',
      document,
      { responseType: 'text' }
    );
  }

  updateAadhaar(userDocument: UpdateDocument): Observable<UserDocumentDetails> {
    return this.httpClient.post<UserDocumentDetails>(
      'http://localhost:9090/users/updateAadhaar',
      userDocument
    );
  }

  updatePan(userDocument: UpdateDocument): Observable<UserDocumentDetails> {
    return this.httpClient.post<UserDocumentDetails>(
      'http://localhost:9090/users/updatePan',
      userDocument
    );
  }

  downloadDocument(link: string): Observable<string> {
    return this.httpClient.post(
      'http://localhost:9090/users/downloadFile',
      link,
      { responseType: 'text' }
    );
  }
}

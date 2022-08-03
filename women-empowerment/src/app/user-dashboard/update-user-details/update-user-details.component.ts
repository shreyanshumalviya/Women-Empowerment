import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/user-login';
import { UserProfileDetails } from 'src/app/user-profile-details';
import { UserServiceService } from 'src/app/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateDocument } from 'src/app/update-document';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.css'],
})
export class UpdateUserDetailsComponent implements OnInit {
  showRegisterPassword: boolean = false;
  showRegisterConfirmPassword: boolean = false;
  userDetails: UserProfileDetails = new UserProfileDetails();
  isValidUser: boolean = false;
  userLoginDetails: UserLogin = new UserLogin();
  password: string;
  aadhaarDocument: File;
  aadhaarResponse: string = '';
  panDocument: File;
  panResponse: string = '';
  updatePanDoc: UpdateDocument = new UpdateDocument();
  updateAadhaarDoc: UpdateDocument = new UpdateDocument();
  aadhaarLocation: string;
  panLocation: string;
  maxDate: Date = new Date();
  panPattern = '^[A-Z]{5}[0-9]{4}[A-Z]{1}$';

  constructor(
    private userService: UserServiceService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  }
  toggleRegisterPasswordVisibility(): void {
    this.showRegisterPassword = !this.showRegisterPassword;
  }
  toggleRegisterConfirmPasswordVisibility(): void {
    this.showRegisterConfirmPassword = !this.showRegisterConfirmPassword;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  updateUserProfileDetails(): void {
    this.userLoginDetails.userId = this.userDetails.userId;
    this.userService.loginUser(this.userLoginDetails).subscribe((response) => {
      this.isValidUser = response;
      if (this.isValidUser) {
        this.userDetails.document.aadhaarLink = this.aadhaarResponse;
        this.userDetails.document.panLink = this.panResponse;
        this.openSnackBar('Request Sent', 'DISMISS');
        this.userService
          .updateUserDetails(this.userDetails)
          .subscribe((response) => {
            this.userDetails = response;
            sessionStorage.setItem('userDetails', JSON.stringify(response));
            this.openSnackBar('Updated', 'DISMISS');
            window.location.reload();
          });
      } else {
        this.openSnackBar(`Error`, 'Try Again');
      }
    });
    this.openSnackBar(`Update Successfull`, 'DISMISS');
  }

  updateAadhaar(event) {
    this.aadhaarDocument = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.aadhaarDocument);
    this.userService.uploadDocument(formData).subscribe((response) => {
      this.aadhaarResponse = response;
      this.updateAadhaarDoc.link = response;
      this.updateAadhaarDoc.documentId = this.userDetails.document.documentId;
      this.userService
        .updateAadhaar(this.updateAadhaarDoc)
        .subscribe((response) => (this.userDetails.document = response));
    });
  }

  updatePan(event) {
    this.panDocument = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.panDocument);
    this.userService.uploadDocument(formData).subscribe((response) => {
      this.panResponse = response;
      this.updatePanDoc.link = response;
      this.updatePanDoc.documentId = this.userDetails.document.documentId;
      this.userService
        .updatePan(this.updatePanDoc)
        .subscribe((response) => (this.userDetails.document = response));
    });
  }

  downloadFile(documentType: string) {
    if (documentType == 'aadhaar') {
      const link = document.createElement('a');
      this.userService
        .downloadDocument(this.userDetails.document.aadhaarLink)
        .subscribe((res) => {
          this.openSnackBar('Request Sent', 'DISMISS');
          this.aadhaarLocation = res;
          link.setAttribute('target', '_blank');
          link.setAttribute('href', this.aadhaarLocation);
          link.setAttribute('download', 'aadhaarUploaded.jpg');
          document.body.appendChild(link);
          link.click();
          link.remove();
        });
    } else if (documentType == 'pan') {
      const link = document.createElement('a');
      this.userService
        .downloadDocument(this.userDetails.document.panLink)
        .subscribe((res) => {
          this.openSnackBar('Request Sent', 'DISMISS');
          this.panLocation = res;
          link.setAttribute('target', '_blank');
          link.setAttribute('href', this.panLocation);
          link.setAttribute('download', 'panUploaded.jpg');
          document.body.appendChild(link);
          link.click();
          link.remove();
        });
    }
  }
}

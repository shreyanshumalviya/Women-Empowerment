import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/user-login';
import { UserProfileDetails } from 'src/app/user-profile-details';
import { UserServiceService } from 'src/app/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    // console.log(this.userDetails);
    this.openSnackBar(`Request Sent`, 'DISMISS');
    this.userLoginDetails.userId = this.userDetails.userId;
    this.userService.loginUser(this.userLoginDetails).subscribe((response) => {
      this.isValidUser = response;
      console.log(this.isValidUser);
      if (this.isValidUser) {
        console.log(this.isValidUser);
        this.userService
          .updateUserDetails(this.userDetails)
          .subscribe((response) => {
            this.userDetails = response;
            sessionStorage.setItem('userDetails', JSON.stringify(response));
            window.location.reload();
          });
      } else {
        this.openSnackBar(`Error`, 'Try Again');
      }
    });
    this.openSnackBar(`Update Successfull`, 'DISMISS');
  }
}

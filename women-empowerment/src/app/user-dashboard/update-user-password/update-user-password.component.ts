import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdatePasswordDetails } from 'src/app/update-password-details';
import { UserServiceService } from 'src/app/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-user-password',
  templateUrl: './update-user-password.component.html',
  styleUrls: ['./update-user-password.component.css'],
})
export class UpdateUserPasswordComponent implements OnInit {
  showRegisterPassword: boolean = false;
  showRegisterConfirmPassword: boolean = false;
  showOldPassword: boolean = false;
  updatePasswordDetails: UpdatePasswordDetails = new UpdatePasswordDetails();
  userEmail: string;
  newPassword: string;
  confirmNewPassword: string;
  constructor(
    private userService: UserServiceService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  toggleRegisterPasswordVisibility(): void {
    this.showRegisterPassword = !this.showRegisterPassword;
  }

  toggleRegisterConfirmPasswordVisibility(): void {
    this.showRegisterConfirmPassword = !this.showRegisterConfirmPassword;
  }

  toggleOldPasswordVisibility(): void {
    this.showOldPassword = !this.showOldPassword;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  changePassword(): void {
    if (
      this.newPassword == this.confirmNewPassword &&
      this.userEmail == JSON.parse(sessionStorage.getItem('userDetails')).email
    ) {
      this.updatePasswordDetails.newPassword = this.newPassword;
      this.updatePasswordDetails.userId = JSON.parse(
        sessionStorage.getItem('userDetails')
      ).userId;
      this.userService
        .updateUserPassword(this.updatePasswordDetails)
        .subscribe((response) => {
          if (response) {
            this.openSnackBar('Password Reset Successfull', 'DISMISS');
            this.route.navigate(['userLoginAndRegister']);
            sessionStorage.removeItem('userDetails');
          }
        });
    } else {
      this.openSnackBar('Password Mismatch', 'Try Again');
    }
  }
}

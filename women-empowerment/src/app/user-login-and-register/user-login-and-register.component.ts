import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserId } from '../user-id';
import { UserLogin } from '../user-login';
import { UserRegisterDetails } from '../user-register-details';
import { UserServiceService } from '../user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login-and-register',
  templateUrl: './user-login-and-register.component.html',
  styleUrls: ['./user-login-and-register.component.css'],
})
export class UserLoginAndRegisterComponent implements OnInit {
  isLoginForm: boolean = true;
  showLoginPassword: boolean = false;
  showRegisterPassword: boolean = false;
  showRegisterConfirmPassword: boolean = false;
  pageState: string = 'login';
  userLoginData: UserLogin = new UserLogin();
  isValidUser: boolean;
  userId: UserId = new UserId();
  userProfile: UserRegisterDetails = new UserRegisterDetails();
  confirmPassword: string;

  constructor(
    private userService: UserServiceService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  showLoginPage() {
    this.pageState = 'login';
  }
  showRegisterPage() {
    this.pageState = 'register';
  }
  showResetPasswordPage() {
    this.pageState = 'updatePassword';
  }
  toggleLoginPasswordVisibility(): void {
    this.showLoginPassword = !this.showLoginPassword;
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

  userLogin() {
    this.userService.loginUser(this.userLoginData).subscribe((msg) => {
      this.isValidUser = msg;
      if (this.isValidUser) {
        this.userId.userId = this.userLoginData.userId;
        this.userService
          .getUserDetails(this.userId)
          .subscribe((userDetails) => {
            sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
            this.route.navigate(['userDashboard']);
          });
      } else {
        this.openSnackBar('Invalid Login Credentials', 'Try Again');
        this.isValidUser = false;
      }
    });
  }

  registerUser(): void {
    if (this.confirmPassword == this.userProfile.password)
      this.userService
        .registerUser(this.userProfile)
        .subscribe((registerSuccessfull) => {
          if (registerSuccessfull) {
            this.openSnackBar('Sign Up Successfull', 'DISMISS');
            window.location.reload();
          }
        });
    else {
      this.openSnackBar('Sign Up Error', 'Try Again');
    }
  }

  passwordReset() {
    // console.log(this.userId.userId);
    this.openSnackBar(`Request Sent`, 'WAIT');
    this.userService.resetPassword(this.userId).subscribe((response) => {
      if (response) {
        this.openSnackBar('Password Reset', 'Check Email!');
        this.pageState = 'login';
      }
    });
    this.openSnackBar(`Couldn't Reset Password`, 'Try Again');
    this.pageState = 'register';
  }
}

import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}

  showLoginPage() {
    this.isLoginForm = true;
  }
  showRegisterPage() {
    this.isLoginForm = false;
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
}

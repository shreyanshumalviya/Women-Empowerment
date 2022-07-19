import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login-and-register',
  templateUrl: './user-login-and-register.component.html',
  styleUrls: ['./user-login-and-register.component.css'],
})
export class UserLoginAndRegisterComponent implements OnInit {
  isLoginForm: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  showLoginPage() {
    this.isLoginForm = true;
  }
  showRegisterPage() {
    this.isLoginForm = false;
  }
}

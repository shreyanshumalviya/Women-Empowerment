import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user-password',
  templateUrl: './update-user-password.component.html',
  styleUrls: ['./update-user-password.component.css'],
})
export class UpdateUserPasswordComponent implements OnInit {
  showRegisterPassword: boolean = false;
  showRegisterConfirmPassword: boolean = false;
  showOldPassword: boolean = false;
  constructor() {}

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
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from './admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  admin: Admin = new Admin();
  errorMessage = ' ';
  showLoginPassword: boolean = false;
  ngOnInit(): void {}
  constructor(private router: Router) {}

  login(): void {
    if (this.admin.adminname == 'Nidhish' && this.admin.password == '123456') {
      sessionStorage.setItem('un', this.admin.adminname);
      this.router.navigate(['/adminDashboardLink/adminLandPage']);
    } else {
      this.errorMessage = 'Username or Password is invalid';
    }
  }
  toggleLoginPasswordVisibility(): void {
    this.showLoginPassword = !this.showLoginPassword;
  }
}

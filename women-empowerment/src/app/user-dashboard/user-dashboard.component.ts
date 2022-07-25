import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  dashboardState: string = 'default';
  profileState: string = 'details';

  constructor() {}

  ngOnInit(): void {}

  toProfilePage(): void {
    this.dashboardState = 'profile';
  }

  toDashboardHome(): void {
    this.dashboardState = '';
  }

  toUpdateDetails(): void {
    this.profileState = 'details';
  }

  toChangePassword(): void {
    this.profileState = 'password';
  }

  toFamilyDetails(): void {
    this.profileState = 'family';
  }
}

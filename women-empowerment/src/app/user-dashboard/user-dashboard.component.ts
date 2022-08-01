import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileDetails } from '../user-profile-details';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  dashboardState: string = 'profile';
  profileState: string = 'details';
  userDetails: UserProfileDetails;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  }

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

  logoutUser(): void {
    this.route.navigate(['userLoginAndRegister']);
    sessionStorage.removeItem('userDetails');
  }

  goToStep():void{
    this.dashboardState='step-courses';
  }

  goToSukanya(){
    this.dashboardState='sukanya';
  }
  goToAccomodation(){
    this.dashboardState='accomodation';
  }
  
}

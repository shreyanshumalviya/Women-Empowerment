import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  username: string | null | undefined;
  constructor() {}

  ngOnInit(): void {
    this.username = sessionStorage.getItem('un');
  }
}

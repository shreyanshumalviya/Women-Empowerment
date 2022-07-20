import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-about-us',
  templateUrl: './admin-about-us.component.html',
  styleUrls: ['./admin-about-us.component.css'],
})
export class AdminAboutUsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-landing-p',
  templateUrl: './admin-landing-p.component.html',
  styleUrls: ['./admin-landing-p.component.css'],
})
export class AdminLandingPComponent implements OnInit {
  constructor() {}
  url = './assets/images/ssy.jpg';
  url1 = './assets/images/wwh.jpg';
  url2 = './assets/images/wwho.jpg';

  images = [this.url, this.url1, this.url2];
  height = 450;
  ngOnInit(): void {}
}

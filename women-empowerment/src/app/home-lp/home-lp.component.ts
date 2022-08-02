import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-lp',
  templateUrl: './home-lp.component.html',
  styleUrls: ['./home-lp.component.css'],
})
export class HomeLPComponent implements OnInit {
  constructor() {}
  url = './assets/images/wwh.jpg';
  url1 = './assets/images/wwho.jpg';
  url2 = './assets/images/ssy.jpg';

  images = [this.url, this.url1, this.url2];
  height = 600;
  ngOnInit(): void {}
}

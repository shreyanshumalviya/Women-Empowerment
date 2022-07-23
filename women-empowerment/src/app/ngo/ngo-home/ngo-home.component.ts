import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngo-home',
  templateUrl: './ngo-home.component.html',
  styleUrls: ['./ngo-home.component.css']
})
export class NgoHomeComponent implements OnInit {
  logging: boolean = true
  text: string = "Register"
  constructor() { }

  ngOnInit(): void {
  }
  public switchComponent(): void {
    console.log("button clicked");
    
    if (this.logging) {
      this.logging = false;
      this.text = "Login"
    } else {
      this.logging = true;
      this.text = "Register";
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
})
export class NgoLoginComponent implements OnInit {

  errorMessage:string = ""
  ngo:any={}

  constructor() { }

  ngOnInit(): void {
  }

  public login():void{}

}

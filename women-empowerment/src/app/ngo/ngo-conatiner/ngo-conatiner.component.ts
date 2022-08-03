import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGO } from 'src/app/models/ngo';

@Component({
  selector: 'app-ngo-conatiner',
  templateUrl: './ngo-conatiner.component.html',
  styleUrls: ['./ngo-conatiner.component.css']
})
export class NgoConatinerComponent implements OnInit {
  ngo:NGO;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("loggedInNgo")===undefined||sessionStorage.getItem("loggedInNgo")===null){
      this.router.navigateByUrl('/ngo/home'); 
    }
    this.ngo=JSON.parse(sessionStorage.getItem("loggedInNgo"));
  }
  logout(){
    sessionStorage.removeItem("loggedInNgo");
    this.router.navigateByUrl('/ngo/home');
  }
}

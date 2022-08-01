import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-conatiner',
  templateUrl: './ngo-conatiner.component.html',
  styleUrls: ['./ngo-conatiner.component.css']
})
export class NgoConatinerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("loggedInNgo")===undefined||sessionStorage.getItem("loggedInNgo")===null){
      this.router.navigateByUrl('/ngo/home'); 
    }
  }
  logout(){
    sessionStorage.removeItem("loggedInNgo");
    this.router.navigateByUrl('/ngo/home');
  }
}

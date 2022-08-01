import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGO } from 'src/app/models/ngo';
import { NgoStatus } from 'src/app/models/ngo-status';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  ngo: NGO;
  ngoStatus: NgoStatus;
  constructor(private router: Router, private ngoService: NgoService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("loggedInNgo") === undefined || sessionStorage.getItem("loggedInNgo") === null) {
      this.router.navigateByUrl('/ngo/home');
    }
    this.ngo = JSON.parse(sessionStorage.getItem("loggedInNgo"));

    this.ngoService.getNgoStatus(this.ngo.ngoId).subscribe(ngoStatus => {
      this.ngoStatus = ngoStatus;
    })
  }

}

import { Component, OnInit } from '@angular/core';
// import { RepositoryService } from './../../shared/repository.service';
import { Accomodation_status } from 'src/app/models/accomodation-status';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Accommodation } from 'src/app/models/accomodation';
import { Router } from '@angular/router';
import{}
import { AccomodationStatusService } from 'src/app/accomodation_status_service.serviceservice';

@Component({
  selector: 'app-accomodation-status',
  templateUrl: './accomodation-status.component.html',
  styleUrls: ['./accomodation-status.component.css']
})
export class AccomodationStatusComponent implements OnInit {

  accomodationstatus:Accommodation[];
  constructor(private accomodationservice:AccomodationStatusService) { 
     this.accomodationservice.getaccomodation().subscribe(accomodationstatus=>{
      this.accomodationstatus=accomodationstatus;
      console.log(accomodationstatus);
     });
    //this.accomodationstatus=accomodationservice.getaccomodation();
    
    
  }
  ngOnInit(): void {}
    
  register(accomodationId :number)
  {
    this.accomodationservice.register(accomodationId);
    
  }

  }

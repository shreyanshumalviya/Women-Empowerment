import { Component, OnInit } from '@angular/core';
// import { RepositoryService } from './../../shared/repository.service';
import { Accomodation_status } from 'src/app/models/accomodation-status';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Accommodation } from 'src/app/models/accomodation';
import { Router } from '@angular/router';
import { UserProfileDetails } from 'src/app/user-profile-details';
import { AccomodationStatusService } from 'src/app/accomodation_status_service.serviceservice';

@Component({
  selector: 'app-accomodation-status',
  templateUrl: './accomodation-status.component.html',
  styleUrls: ['./accomodation-status.component.css']
})
export class AccomodationStatusComponent implements OnInit {
  user: UserProfileDetails;

  accomodationstatus:Accommodation[]=[];
  displayedColumns: string[] = ["accomodationId", "name", "state", "addressLine1","addressLine2","landmark" ,"pincode","city","Button"]
  
  
  constructor(private accomodationservice:AccomodationStatusService,private router:Router) { 
     this.accomodationservice.getaccomodation().subscribe(accomodationstatus=>{
      this.accomodationstatus=accomodationstatus;
      console.log(accomodationstatus);
     });
    //this.accomodationstatus=accomodationservice.getaccomodation();
    
    
  }
  ngOnInit(): void {this.user = JSON.parse(sessionStorage.getItem('userDetails'));

  if(sessionStorage.getItem('userDetails')===null || sessionStorage.getItem('userDetails')===undefined){

    this.router.navigateByUrl('userLoginAndRegister');

  }}
    
  register(accomodationId :number)
  {
    console.log("registering");
    this.accomodationservice.register(accomodationId,this.user.userId).subscribe(a=>{});  
  }

  }

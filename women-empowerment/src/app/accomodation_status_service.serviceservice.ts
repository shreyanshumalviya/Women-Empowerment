import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accommodation } from './models/accomodation';
@Injectable({
    providedIn: 'root'
  })
  export class AccomodationStatusService {
  register(accomodationId: number) {
    throw new Error('Method not implemented.');
  }

   
  getaccomodation():Observable< Accommodation[]> {
      return this.httpClient.get<Accommodation[]>("http://localhost:9090/accomodation/list-accomodation");
    //   let accomodationstatus: Accommodation[] = [];
    //   let accommodation = new Accommodation();

    //   accommodation.accomodationId=1;
      
    //   accommodation.addressLine1="katin road";
    //   accommodation.addressLine2="birghum";
    //   accommodation.city="South 24";
    //  accommodation.landmark="near store";
    //  accommodation.name="rinku";
    //  accommodation.ngo_id=1201;
    //  accommodation.pincode="20394";
    //  accommodation.state="wb";
    //  accommodation.dayCareCentre=true;
    //  accommodation.roomAvailable=5;
    //  accommodation.capacity=20;
    //  accommodation.totalRoom=10;
    //  accomodationstatus.push(accommodation);


    //  let accommodation2 = new Accommodation();

    //   accommodation2.accomodationId=1;
      
    //   accommodation2.addressLine1="road";
    //   accommodation2.addressLine2="birghum";
    //   accommodation2.city="noth 24";
    //  accommodation2.landmark="near ";
    //  accommodation2.name="nku";
    //  accommodation2.ngo_id=1202;
    //  accommodation2.pincode="215";
    //  accommodation2.state="wb";
    //  accommodation2.dayCareCentre=true;
    //  accommodation2.roomAvailable=4;
    //  accommodation2.capacity=24;
    //  accommodation2.totalRoom=12;
    //  accomodationstatus.push(accommodation2);

  
  
    //   return accomodationstatus;
     }
    
  
    //accomodationstatus:Accommodation[] =[];
    constructor(private httpClient:HttpClient) { 
     
    }
    
  }
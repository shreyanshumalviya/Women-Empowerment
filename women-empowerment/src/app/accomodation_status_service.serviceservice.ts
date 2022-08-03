import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accommodation } from './models/accomodation';
import { Accomodation_status } from './models/accomodation-status';
@Injectable({
    providedIn: 'root'
  })
  export class AccomodationStatusService {
  register(accomodationId: number,userId:number) : Observable<Accomodation_status> 
  {

    return this.httpClient.get<Accomodation_status>(`http://localhost:9090/accomodation/${accomodationId}/register/${userId}`);

  }

   
  getaccomodation():Observable< Accommodation[]> {
      return this.httpClient.get<Accommodation[]>("http://localhost:9090/accomodation/list-accomodation");
    
     }
    
  
    //accomodationstatus:Accommodation[] =[];
    constructor(private httpClient:HttpClient) { 
     
    }
    
  }
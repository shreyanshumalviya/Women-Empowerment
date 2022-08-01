import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SukanyaRegistration } from './models/sukanya-registration';

@Injectable({
  providedIn: 'root'
})
export class SukanyaService {

  constructor(private httpClient:HttpClient) { }

  public register(sukanyaRegistration:SukanyaRegistration):Observable<String>{    
    console.log(sukanyaRegistration.firstName);
    console.log(sukanyaRegistration.lastName);
    console.log(sukanyaRegistration.aadharNumber);
    console.log(sukanyaRegistration.dateOfBirth);
    console.log(JSON.stringify(sukanyaRegistration));
    
    return this.httpClient.post<String>("http://localhost:9090/sukanya/register",sukanyaRegistration)
    
    
    
    
  }
}

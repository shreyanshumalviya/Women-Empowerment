import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SukanyaDoc } from './models/sukanya-doc';
import { SukanyaRegResponse } from './models/sukanya-reg-response';
import { SukanyaRegistration } from './models/sukanya-registration';

@Injectable({
  providedIn: 'root'
})
export class SukanyaService {

  constructor(private httpClient:HttpClient) { }

  public register(sukanyaRegistration:SukanyaRegistration):Observable<SukanyaRegResponse>{    
    console.log(sukanyaRegistration.firstName);
    console.log(sukanyaRegistration.lastName);
    console.log(sukanyaRegistration.aadharNumber);
    console.log(sukanyaRegistration.dateOfBirth);
    console.log(JSON.stringify(sukanyaRegistration));
    
    return this.httpClient.post<SukanyaRegResponse>("http://localhost:9090/sukanya/register",sukanyaRegistration)
    
    
    
    
  }

  public addSukanyaDoc(sukanyaDoc: SukanyaDoc):Observable<SukanyaDoc>{
    return this.httpClient.post<SukanyaDoc>("http://localhost:9090/sukanya/upload_doc",sukanyaDoc)
  }
}

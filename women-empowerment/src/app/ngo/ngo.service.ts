import { Injectable } from '@angular/core';
import { NGO } from '../models/NGO';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
  static ngos: NGO[] = [];
  constructor() {
    console.log("constructor", NgoService.ngos.length);
    
    let ngo = new NGO();
    ngo.name = "";
    ngo.address = ""
    ngo.contact = ""
    ngo.approved_by = "";
    ngo.id = ""
    ngo.password = "as"
    ngo.email = "as"
    ngo.description = ""
    ngo.verified = true;

    NgoService.ngos.push(ngo);
    console.log("constructor", NgoService.ngos.length);
    
  }

  public registerNGO(ngo: NGO): void {
    try {
      NgoService.ngos.push(ngo); console.log("pushed");
      console.log(ngo);

    } catch (e) {
      console.log(e);
    }
  }

  public login(username: string, password: string): boolean {
    for (const ngo of NgoService.ngos) {
      if (ngo.email === username && ngo.password === password) {
        return true;
      }
    }
    return false;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accommodation } from 'src/app/models/accomodation';
import { NGO } from 'src/app/models/ngo';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-create-accomodation',
  templateUrl: './create-accomodation.component.html',
  styleUrls: ['./create-accomodation.component.css']
})
export class CreateAccomodationComponent implements OnInit {
  accomodation: Accommodation= new Accommodation();
  minDate = new Date();
  constructor(private ngoService: NgoService, private router: Router) {}

  ngOnInit(): void {
    let ngoString = sessionStorage.getItem("loggedInNgo");
    console.log(ngoString);
    
    if (ngoString === null) {
      this.router.navigate(['/ngo/home'])
    }
    let ngo: NGO = JSON.parse(ngoString);
    this.accomodation.ngo_id=ngo.ngoId;
  }

  public createAccomodation() {
    this.ngoService.createAccomodation(this.accomodation).subscribe(accomodation=>{
      console.log(JSON.stringify(accomodation));
      
    });
  }
}

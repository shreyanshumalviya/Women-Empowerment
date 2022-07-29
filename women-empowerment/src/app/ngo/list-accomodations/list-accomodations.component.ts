import { Component, OnInit } from '@angular/core';
import { Accommodation } from 'src/app/models/accomodation';
import { Course } from 'src/app/models/course';
import { NGO } from 'src/app/models/ngo';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-list-accomodations',
  templateUrl: './list-accomodations.component.html',
  styleUrls: ['./list-accomodations.component.css']
})
export class ListAccomodationsComponent implements OnInit {
  accommodations: Accommodation[];
  openArray: boolean[] = [];
  loggedInNgo:NGO ;
  constructor(private ngoService: NgoService) { }

  ngOnInit(): void {

    let ngoString = sessionStorage.getItem("loggedInNgo");

    console.log(ngoString);
    
    this.loggedInNgo = JSON.parse(ngoString);

    this.ngoService.getAccomodationsByNgoId(this.loggedInNgo.ngoId).subscribe(accommodations => {
      this.accommodations = accommodations;
      console.log(accommodations);
      
      for (let accommodation of this.accommodations) {
        this.openArray.push(false)
      }
    });

  }
}

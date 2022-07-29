import { Component, OnInit } from '@angular/core';
import { Accommodation } from 'src/app/models/accomodation';
import { Course } from 'src/app/models/course';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-list-accomodations',
  templateUrl: './list-accomodations.component.html',
  styleUrls: ['./list-accomodations.component.css']
})
export class ListAccomodationsComponent implements OnInit {
  accommodations: Accommodation[];
  openArray: boolean[] = [];
  constructor(private ngoService: NgoService) { }

  ngOnInit(): void {
    this.accommodations = this.ngoService.getAccomodationsByNgoId(1);

    for (let accommodation of this.accommodations) {
      this.openArray.push(false)
    }
  }
}

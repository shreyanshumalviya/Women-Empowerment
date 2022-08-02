import { Component, OnInit } from '@angular/core';
import {
  AccomodationList,
  AdminAccomodationService,
} from 'src/app/Services/admin-accomodation.service';

@Component({
  selector: 'app-admin-accomodations',
  templateUrl: './admin-accomodations.component.html',
  styleUrls: ['./admin-accomodations.component.css'],
})
export class AdminAccomodationsComponent implements OnInit {
  data: AccomodationList[] = [];
  isShown: boolean = false;
  columnsToDisplay = [
    'accomodationId',
    'name',
    'state',
    'city',
    'addressLine1',
    'addressLine2',
    'pincode',
    'landmark',
    'totalRoom',
    'roomAvailable',
    'capacity',
    'dayCareCentre',
    'ngo',
    'accomodationStatuses',
    'accomodation',
  ];

  constructor(private adminaccomodationservice: AdminAccomodationService) {
    this.adminaccomodationservice.GetSukanyaList().subscribe((x) => {
      this.data = x;
      console.log(this.data);
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  newColor = false;
  toggleColor() {
    this.newColor = !this.newColor;
  }
  public getRowsValue(validate) {
    if (validate === null) {
      return this.data.length;
    } else {
      return this.data.filter((i) => i.accomodationId == validate).length;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accommodation } from 'src/app/models/accomodation';
import { NGO } from 'src/app/models/ngo';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-create-accomodation',
  templateUrl: './create-accomodation.component.html',
  styleUrls: ['./create-accomodation.component.css'],
})
export class CreateAccomodationComponent implements OnInit {
  errorMessage: string = '';
  accomodation: Accommodation = new Accommodation();
  minDate = new Date();
  constructor(private ngoService: NgoService, private router: Router) {}

  ngOnInit(): void {
    let ngoString = sessionStorage.getItem('loggedInNgo');
    console.log(ngoString);

    if (ngoString === null) {
      this.router.navigate(['/ngo/home']);
    }
    let ngo: NGO = JSON.parse(ngoString);
    this.accomodation.ngo_id = ngo.ngoId;
  }

  public createAccomodation() {
    if (this.accomodation.name === undefined || this.accomodation.name === '') {
      this.errorMessage = 'Enter Accomodation Name';
      return;
    }
    if (
      this.accomodation.addressLine1 === undefined ||
      this.accomodation.addressLine1 === ''
    ) {
      this.errorMessage = 'Enter Address Line 1';
      return;
    }
    if (
      this.accomodation.addressLine2 === undefined ||
      this.accomodation.addressLine1 === ''
    ) {
      this.errorMessage = 'Enter Address Line 2';
      return;
    }
    if (
      this.accomodation.capacity === undefined ||
      this.accomodation.capacity === 0
    ) {
      this.errorMessage = 'Enter Capacity';
      return;
    }
    if (
      this.accomodation.totalRoom === undefined ||
      this.accomodation.totalRoom === 0
    ) {
      this.errorMessage = 'Enter Total Rooms Available';
      return;
    }
    if (
      this.accomodation.landmark === undefined ||
      this.accomodation.landmark === ''
    ) {
      this.errorMessage = 'Enter Landmark';
      return;
    }
    if (
      this.accomodation.pincode === undefined ||
      this.accomodation.pincode === ''
    ) {
      this.errorMessage = 'Enter Pincode';
      return;
    }
    if (
      this.accomodation.state === undefined ||
      this.accomodation.state === ''
    ) {
      this.errorMessage = 'Enter State';
      return;
    }
    if (this.accomodation.city === undefined || this.accomodation.city === '') {
      this.errorMessage = 'Enter City';
      return;
    }

    this.ngoService
      .createAccomodation(this.accomodation)
      .subscribe((accomodation) => {
        console.log(JSON.stringify(accomodation));
        this.errorMessage = 'Accomodation Created';
      });
  }
}

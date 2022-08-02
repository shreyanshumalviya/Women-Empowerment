import { Component, OnInit } from '@angular/core';
import {
  AdminSukanyaService,
  SukanyaList,
} from 'src/app/Services/admin-sukanya.service';

@Component({
  selector: 'app-admin-sukaya-yojana',
  templateUrl: './admin-sukaya-yojana.component.html',
  styleUrls: ['./admin-sukaya-yojana.component.css'],
})
export class AdminSukayaYojanaComponent implements OnInit {
  data: SukanyaList[] = [];
  isShown: boolean = false;
  columnsToDisplay = [
    'accountId',
    'beneficiaryName',
    'dob',
    'adharNo',
    'registrationDate',
    'user',
    'sukanyaDoc',
    'verified',
    'actions',
  ];
  constructor(private adminsukanyaservice: AdminSukanyaService) {
    this.adminsukanyaservice.GetSukanyaList().subscribe((x) => {
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
      return this.data.filter((i) => i.verified == validate).length;
    }
  }

  updateActiveStatus(element) {
    // console.log(element.verified);
    element.verified = !element.verified;
    this.adminsukanyaservice.UpdateNgoList().subscribe((updateUser) => {
      element.validate = true;
    });
  }
}

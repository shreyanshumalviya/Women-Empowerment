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
  DocLink: string;
  DocLocation: string;
  columnsToDisplay = [
    'accountId',
    'beneficiaryName',
    'dob',
    'adharNo',
    'registrationDate',
    'user',
    'doc',
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
    this.adminsukanyaservice.verify(element.accountId).subscribe((response) => {
      element.validate = response;
    });
  }
  Doc(accountId) {
    this.adminsukanyaservice.getUserData(accountId).subscribe((response) => {
      this.DocLink = response.aadhaarLink;

      const link = document.createElement('a');
      this.adminsukanyaservice
        .downloadDocument(this.DocLink)
        .subscribe((res) => {
          this.DocLocation = res;
          link.setAttribute('target', '_blank');
          link.setAttribute('href', this.DocLocation);
          link.setAttribute('download', 'DocUploaded.jpg');
          document.body.appendChild(link);
          link.click();
          link.remove();
        });
    });
  }
}

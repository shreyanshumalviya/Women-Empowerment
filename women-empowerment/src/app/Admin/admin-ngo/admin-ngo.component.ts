import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  ElementRef,
} from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AdminNgoService, NgoList } from 'src/app/Services/admin-ngo.service';

@Component({
  selector: 'app-admin-ngo',
  templateUrl: './admin-ngo.component.html',
  styleUrls: ['./admin-ngo.component.css'],
})
export class AdminNgoComponent {
  data: NgoList[] = [];
  isShown: boolean = false;
  columnsToDisplay = [
    'ngoId',
    'name',
    'email',
    'address',
    'contact',
    'doc',
    'verified',
    'actions',
  ];
  DocLink: string;
  DocLocation: string;
  constructor(private adminngoservice: AdminNgoService) {
    this.adminngoservice.GetNgoList().subscribe((x) => {
      this.data = x;
      console.log(this.data);
    });
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
    this.adminngoservice.verify(element.ngoId).subscribe((response) => {
      element.validate = response;
    });
  }

  Doc(ngoId) {
    console.log(ngoId, 'shreyanshu');

    this.adminngoservice.getUserData(ngoId).subscribe((response) => {
      this.DocLink = response.certificateLink;

      const link = document.createElement('a');
      this.adminngoservice.downloadDocument(this.DocLink).subscribe((res) => {
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

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
import {
  NgoDisplayTableDataSource,
  NgoDisplayTableItem,
} from '../ngo-display-table/ngo-display-table-datasource';

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
    'description',
    'contact',
    'verified',
    'actions',
  ];
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
    // console.log(element.verified);
    element.verified = !element.verified;
    this.adminngoservice.UpdateNgoList().subscribe((updateUser) => {
      element.validate = true;
    });
  }
}

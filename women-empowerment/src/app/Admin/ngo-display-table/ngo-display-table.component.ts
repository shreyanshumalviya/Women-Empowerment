import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
  NgoDisplayTableDataSource,
  NgoDisplayTableItem,
} from './ngo-display-table-datasource';

@Component({
  selector: 'app-ngo-display-table',
  templateUrl: './ngo-display-table.component.html',
  styleUrls: ['./ngo-display-table.component.css'],
})
export class NgoDisplayTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<NgoDisplayTableItem>;
  dataSource: NgoDisplayTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new NgoDisplayTableDataSource();
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

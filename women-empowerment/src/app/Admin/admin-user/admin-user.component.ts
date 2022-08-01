import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {
  AdminUserService,
  UserList,
} from 'src/app/Services/admin-user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css'],
})
export class AdminUserComponent implements AfterViewInit {
  data: UserList[] = [];
  isShown: boolean = false;
  columnsToDisplay = [
    'firstName',
    'middleName',
    'lastName',
    'email',
    'password',
    'contactNo',
    'aadhaarNo',
    'panNo',
    'dob',
    'gender',
    'jobStatus',
    'jobTitle',
    'salary',
    'residenceArea',
    'maritalStatus',
    'disabled',
    'verified',
    'actions',
  ];
  dataSource!: MatTableDataSource<UserList>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private adminuserservice: AdminUserService) {
    this.adminuserservice.GetSukanyaList().subscribe((x) => {
      this.data = x;
      console.log(this.data);
    });
  }
  ngAfterViewInit(): void {
    this.adminuserservice.getUserData().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
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
    element.verified = !element.verified;
    this.adminuserservice.UpdateUserList().subscribe((updateUser) => {
      element.validate = true;
    });
  }
  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

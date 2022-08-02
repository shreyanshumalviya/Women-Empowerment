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
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css'],
})
export class AdminUserComponent {
  data: UserList[] = [];
  aadhaarLink: string;
  panLink: string;
  isShown: boolean = false;
  aadhaarLocation: string;
  panLocation: string;
  isChecked = true;
  columnsToDisplay = [
    'firstName',
    'middleName',
    'lastName',
    'email',
    'aadhaarNo',
    'aadhaarDoc',
    'panNo',
    'panDoc',
    'dob',
    'salary',
    'verified',
    'actions',
  ];

  constructor(
    private adminuserservice: AdminUserService,
    private userService: UserServiceService
  ) {
    this.adminuserservice.GetSukanyaList().subscribe((x) => {
      this.data = x;
      console.log(this.data);
    });
  }

  public getRowsValue(validate) {
    if (validate === null) {
      return this.data.length;
    } else {
      return this.data.filter((i) => i.verified == validate).length;
    }
  }

  updateActiveStatus(element) {
    this.adminuserservice.verify(element.userId).subscribe((response) => {
      element.validate = response;
    });
  }
  PanDoc(userId) {
    this.userService.getUserDetails(userId).subscribe((response) => {
      this.panLink = response.document.panLink;
      const link = document.createElement('a');

      this.adminuserservice.downloadDocument(this.panLink).subscribe((res) => {
        this.panLocation = res;
        link.setAttribute('target', '_blank');
        link.setAttribute('href', this.panLocation);
        link.setAttribute('download', 'panUploaded.jpg');
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
    });
  }
  AadhaarDoc(userId) {
    this.userService.getUserDetails(userId).subscribe((response) => {
      this.aadhaarLink = response.document.adharLink;

      const link = document.createElement('a');
      this.adminuserservice
        .downloadDocument(this.aadhaarLink)
        .subscribe((res) => {
          this.aadhaarLocation = res;
          link.setAttribute('target', '_blank');
          link.setAttribute('href', this.aadhaarLocation);
          link.setAttribute('download', 'aadhaarUploaded.jpg');
          document.body.appendChild(link);
          link.click();
          link.remove();
        });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { EnrolledUsers } from 'src/app/models/enrolled-users';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  enrolledUsers: EnrolledUsers[]
  displayedColumns=["srNo","name","date_of_registration","email","contact"]
  ngoService: NgoService;
  constructor() { 
    this.ngoService=  new NgoService();
    let courseId = 2
    this.enrolledUsers = this.ngoService.getEnrolledUsers(courseId);
  }

  ngOnInit(): void {
  }

}

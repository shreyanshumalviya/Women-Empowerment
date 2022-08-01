import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrolledUsers } from 'src/app/models/enrolled-users';
import { Enrollment } from 'src/app/models/enrollment';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  enrolledUsers: Enrollment[]
  displayedColumns = ["srNo", "name", "date_of_registration", "email", "contact"]
  constructor(private activatedRoute: ActivatedRoute, private ngoService: NgoService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      console.log(s["courseId"])
      let courseId = s["courseId"];

      this.ngoService.getEnrolledUsers(courseId).subscribe(enrollments => {
        this.enrolledUsers = enrollments;
      });
    });

  }
}

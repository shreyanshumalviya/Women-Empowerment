import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { NgoService } from '../ngo.service';
import { NGO } from "../../models/ngo";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  courses: Course[] = [];
  openArray: boolean[] = [];
  loggedInNgo: NGO;
  constructor(private ngoService: NgoService, private router: Router) { }


  ngOnInit(): void {
    let ngoString = sessionStorage.getItem("loggedInNgo");
    console.log(ngoString);

    if (ngoString === null) {
      this.router.navigate(['/ngo/home'])
    }
    this.loggedInNgo = JSON.parse(ngoString);
    this.ngoService.getCoursesByNgoId(this.loggedInNgo.ngoId).subscribe(courses => {
      this.courses = courses
      console.log(courses);
      

      for (let course of this.courses) {
        this.openArray.push(false)
      }
    });

  }
  dateToReadable(startDate: Date): string {
    try {
      return ("0" + startDate.getDate()).slice(-2) + "-" + ("0" + (startDate.getMonth() + 1)).slice(-2) + "-" +
        startDate.getFullYear() + " " + ("0" + startDate.getHours()).slice(-2) + ":" + ("0" + startDate.getMinutes()).slice(-2)
    } catch (e) {
      return JSON.stringify(startDate);
    }
  }

  public goToCreateCourse() {
    this.router.navigate(['/ngo/create_course'])
  }

}

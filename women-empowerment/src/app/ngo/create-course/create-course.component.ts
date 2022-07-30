import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { NgoService } from '../ngo.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { NGO } from 'src/app/models/ngo';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  errorMessage: string = ""
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  course: Course = new Course();
  minDate = new Date();
  constructor(private ngoService: NgoService, private router: Router) { }

  ngOnInit(): void {
    this.course.tags = []
    let ngoString = sessionStorage.getItem("loggedInNgo");
    console.log(ngoString);

    if (ngoString === null) {
      this.router.navigate(['/ngo/home'])
    }
    let ngo: NGO = JSON.parse(ngoString);
    this.course.ngo_id = ngo.ngoId;
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.course.tags.push(value);
    }

    // Clear the input value

    event.chipInput!.clear();
  }

  remove(fruit: string): void {
    const index = this.course.tags.indexOf(fruit);

    if (index >= 0) {
      this.course.tags.splice(index, 1);
    }
  }

  public createCourse() {
    if (this.course.courseTitle === undefined || this.course.courseTitle === "") {
      this.errorMessage = "Course Title cannot be empty";
      return;
    }
    if (this.course.description === undefined || this.course.description === "") {
      this.errorMessage = "Course Description cannot be empty";
      return;
    }
    if (this.course.description.length < 30) {
      this.errorMessage = "Course Description has to be more than 30 characters";
      return;
    }
    if (this.course.jobOffered && this.course.vacancy === undefined || this.course.vacancy === 0) {
      this.errorMessage = "Enter Vacancy if job is offerred";
      return;
    }
    if (this.course.courseMode === "Offline" && this.course.location === undefined || this.course.location === "") {
      this.errorMessage = "Enter location if course is offline";
      return;
    }
    console.log(typeof (this.course.jobOffered));
    this.ngoService.createCourse(this.course).subscribe(course => {
      console.log(course);
      this.errorMessage = "Course Created"
    })
  }

}

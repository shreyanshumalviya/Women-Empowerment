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
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  course: Course = new Course();
  minDate = new Date();
  constructor(private ngoService: NgoService, private router: Router) {}

  ngOnInit(): void {
    this.course.tags = []
    let ngoString = sessionStorage.getItem("loggedInNgo");
    console.log(ngoString);
    
    if (ngoString === null) {
      this.router.navigate(['/ngo/home'])
    }
    let ngo: NGO = JSON.parse(ngoString);
    this.course.ngo_id=ngo.ngoId;
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
    console.log(typeof (this.course.jobOffered));
    this.ngoService.createCourse(this.course).subscribe(course => {
      console.log(course);

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { NgoService } from '../ngo.service';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: string[] = ['Lemon', 'Lime',  'Apple'];
  course:Course= new Course();
  minDate = new Date();
  ngoService: NgoService = new NgoService();
  constructor() { 
  }

  ngOnInit(): void {
    this.course.tags=[]
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

  remove(fruit:string ): void {
    const index = this.course.tags.indexOf(fruit);

    if (index >= 0) {
      this.course.tags.splice(index, 1);
    }
  }

  public createCourse(){
    console.log(typeof(this.course.job_offered));
    this.ngoService.createCourse(this.course)
  }
 

}

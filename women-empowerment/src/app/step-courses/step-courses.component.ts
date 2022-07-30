import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-step-courses',
  templateUrl: './step-courses.component.html',
  styleUrls: ['./step-courses.component.css']
})
export class StepCoursesComponent implements OnInit {
  courses:Course[];
  constructor(private courseService:CourseServiceService) { 
     this.courseService.getCourses().subscribe(courses=>{
      this.courses=courses;
      console.log(this.courses);
     });
    
    
  }
  filter(){}
  ngOnInit(): void {
  }

// component.s
 
}

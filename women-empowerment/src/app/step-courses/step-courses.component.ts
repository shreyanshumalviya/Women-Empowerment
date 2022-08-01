import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CourseServiceService } from '../course-service.service';
import { Course } from '../models/course';
import { UserProfileDetails } from '../user-profile-details';

@Component({
  selector: 'app-step-courses',
  templateUrl: './step-courses.component.html',
  styleUrls: ['./step-courses.component.css']
})
export class StepCoursesComponent implements OnInit {
  courses:Course[];
  user: UserProfileDetails;

  constructor(private courseService:CourseServiceService, private router:Router, private snackBar:MatSnackBar) { 
     this.courseService.getCourses().subscribe(courses=>{
      this.courses=courses;
      console.log(this.courses);
     });
    
    
  }
  filter(){}
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userDetails'));
    if(sessionStorage.getItem('userDetails')===null || sessionStorage.getItem('userDetails')===undefined){
      this.router.navigateByUrl('userLoginAndRegister');
    }
  }

  register(courseId: number){
    this.courseService.enrollForCourse(this.user.userId, courseId).subscribe(enrollment=>{
      this.snackBar.open("Successfully Enrolled","action")
    });
  }
 
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './models/course';
import { Enrollment } from './models/enrollment';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  data:Array<any> = [
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "agriculture",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "agriculture",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "agriculture",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "agriculture",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "agriculture",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "agriculture",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "fishing",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "agriculture",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "fishing",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "agriculture",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "agriculture",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "fishing",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    },
    {
        "image": "./Images/agriculture-image.jpg",
        "title": "title1",
        "category": "fishing",
        "description": "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.",
        "mode": [
            "online",
            "12-08-2000"
        ]
    }
]
getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>("http://localhost:9090/course/list-course");
    // let courses: Course[] = [];
    // let course = new Course();
    // course.id = 1;
    // course.ngo_id = 1;
    // course.courseTitle = "Course Title 1";
    // course.description = "description of the course is description";
    // course.startDate = new Date();
    // course.duration = 2;
    // course.courseMode = "online";
    // course.tags = ["aaaa", "bbbb", "cc"];
    // course.location;
    // course.jobOffered = false;
    // course.vacancy = 0

    // courses.push(course);
    // let course2 = new Course()
    // course2.id = 2;
    // course2.ngo_id = 2;
    // course2.courseTitle = "Course Title 2";
    // course2.description = "Course 2 Description ";
    // course2.startDate = new Date();
    // course2.duration = 5;
    // course2.courseMode = "offline";
    // course2.tags = ["aaaa", "bbbb", "cc"];
    // course2.location= "Hosasdfa";
    // course2.jobOffered = true;
    // course2.vacancy = 200

    // courses.push(course2);
    // let course3 = new Course()
    // course3.id = 3;
    // course3.ngo_id = 3;
    // course3.courseTitle = "Course Title 3";
    // course3.description = "couse 3 description ";
    // course3.startDate = new Date();
    // course3.duration = 5;
    // course3.courseMode = "offline";
    // course3.tags = ["aaaa", "bbbb", "cc"];
    // course3.location= "Hosasdfa";
    // course3.jobOffered = true;
    // course3.vacancy = 100

    // courses.push(course3);
    // let course4 = new Course()
    // course4.id = 2;
    // course4.ngo_id = 2;
    // course4.courseTitle = "Course Title 4";
    // course4.description = "2222 description 2 of the course is description2 ";
    // course4.startDate = new Date();
    // course4.duration = 5;
    // course4.courseMode = "online";
    // course4.tags = ["aaaa", "bbbb", "cc"];
    // course4.location= "Hosasdfa";
    // course4.jobOffered = true;
    // course4.vacancy = 50

    // courses.push(course4);
    // let course5 = new Course()
    // course5.id = 2;
    // course5.ngo_id = 2;
    // course5.courseTitle = "Course Title 5";
    // course5.description = "2222 description 2 of the course is description2 ";
    // course5.startDate = new Date();
    // course5.duration = 5;
    // course5.courseMode = "offline";
    // course5.tags = ["aaaa", "bbbb", "cc"];
    // course5.location= "Hosasdfa";
    // course5.jobOffered = true;
    // course5.vacancy = 20

    // courses.push(course5);
    // let course6 = new Course()
    // course6.id = 2;
    // course6.ngo_id = 2;
    // course6.courseTitle = "Course Title 6";
    // course6.description = "2222 description 2 of the course is description2 ";
    // course6.startDate = new Date();
    // course6.duration = 5;
    // course6.courseMode = "offline";
    // course6.tags = ["aaaa", "bbbb", "cc"];
    // course6.location= "Hosasdfa";
    // course6.jobOffered = true;
    // course6.vacancy = 120

    // courses.push(course6);
    // let course7 = new Course()
    // course7.id = 2;
    // course7.ngo_id = 2;
    // course7.courseTitle = "Course Title 7";
    // course7.description = "2222 description 2 of the course is description2 ";
    // course7.startDate = new Date();
    // course7.duration = 5;
    // course7.courseMode = "online";
    // course7.tags = ["aaaa", "bbbb", "cc"];
    // course7.location= "Hosasdfa";
    // course7.jobOffered = true;
    // course7.vacancy = 43

    // courses.push(course7);
    // let course8 = new Course()
    // course8.id = 2;
    // course8.ngo_id = 2;
    // course8.courseTitle = "Course Title 8";
    // course8.description = "2222 description 2 of the course is description2 ";
    // course8.startDate = new Date();
    // course8.duration = 5;
    // course8.courseMode = "online";
    // course8.tags = ["aaaa", "bbbb", "cc"];
    // course8.location= "Hosasdfa";
    // course8.jobOffered = true;
    // course8.vacancy = 198

    // courses.push(course8);
    // let course9 = new Course()
    // course9.id = 2;
    // course9.ngo_id = 2;
    // course9.courseTitle = "Course Title 9";
    // course9.description = "2222 description 2 of the course is description2 ";
    // course9.startDate = new Date();
    // course9.duration = 5;
    // course9.courseMode = "online";
    // course9.tags = ["aaaa", "bbbb", "cc"];
    // course9.location= "Hosasdfa";
    // course9.jobOffered = true;
    // course9.vacancy = 256

    // courses.push(course9);
    // let course10 = new Course()
    // course10.id = 2;
    // course10.ngo_id = 2;
    // course10.courseTitle = "Course Title 10";
    // course10.description = "2222 description 2 of the course is description2 ";
    // course10.startDate = new Date();
    // course10.duration = 5;
    // course10.courseMode = "offline";
    // course10.tags = ["aaaa", "bbbb", "cc"];
    // course10.location= "Hosasdfa";
    // course10.jobOffered = true;
    // course10.vacancy = 290

    // courses.push(course10);
    // let course11 = new Course()
    // course11.id = 2;
    // course11.ngo_id = 2;
    // course11.courseTitle = "Course Title 11";
    // course11.description = "2222 description 2 of the course is description2 ";
    // course11.startDate = new Date();
    // course11.duration = 5;
    // course11.courseMode = "online";
    // course11.tags = ["aaaa", "bbbb", "cc"];
    // course11.location= "Hosasdfa";
    // course11.jobOffered = true;
    // course11.vacancy = 144

    // courses.push(course11);
    // let course12 = new Course()
    // course12.id = 2;
    // course12.ngo_id = 2;
    // course12.courseTitle = "Course Title 12";
    // course12.description = "2222 description 2 of the course is description2 ";
    // course12.startDate = new Date();
    // course12.duration = 5;
    // course12.courseMode = "offline";
    // course12.tags = ["aaaa", "bbbb", "cc"];
    // course12.location= "Hosasdfa";
    // course12.jobOffered = true;
    // course12.vacancy = 183

    // courses.push(course12);


    // return courses;
  }
  

  courses:Course[] =[];
  constructor(private httpClient:HttpClient) { this.data.forEach(element => {
    let course :Course = new Course();
    course.courseTitle= element.title;
    course.tags= [element.category];
    course.description= element.description;
    course.courseMode= element.mode[0];
  }); }

  enrollForCourse(userId:number, courseId: number):Observable<Enrollment>{
    return this.httpClient.get<Enrollment>(`http://localhost:9090/course/${courseId}/enroll/${userId}`);
  }
  
}

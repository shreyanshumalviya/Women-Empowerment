import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { EnrolledUsers } from '../models/enrolled-users';
import { NGO } from '../models/NGO';
import { ResidingUser } from '../models/residing-user';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
  static ngos: NGO[] = [];
  static courses: Course[] = [];
  constructor() {
    console.log("constructor", NgoService.ngos.length);

    let ngo = new NGO();
    ngo.name = "";
    ngo.address = ""
    ngo.contact = ""
    ngo.approved_by = "";
    ngo.id = ""
    ngo.password = "as"
    ngo.email = "as"
    ngo.description = ""
    ngo.verified = true;

    NgoService.ngos.push(ngo);
    console.log("constructor", NgoService.ngos.length);

  }

  public registerNGO(ngo: NGO): void {
    // make a call to java spring server app
    try {
      NgoService.ngos.push(ngo); console.log("pushed");
      console.log(ngo);

    } catch (e) {
      console.log(e);
    }
  }

  public login(username: string, password: string): boolean {

    // make a call to java spring server app
    for (const ngo of NgoService.ngos) {
      if (ngo.email === username && ngo.password === password) {
        console.log(ngo);

        return true;
      }
    }
    return false;
  }

  public createCourse(course: Course) {
    console.log(course);

    NgoService.courses.push(course);
  }
  getEnrolledUsers(courseId: number): EnrolledUsers[] {
    let enrolledUsers: EnrolledUsers[] = [];
    let enrolledUser: EnrolledUsers = new EnrolledUsers();
    enrolledUser.srNo=1;
    enrolledUser.first_name="Jonho";
    enrolledUser.last_name="Josh";
    enrolledUser.email="email@email.com";
    enrolledUser.contact="4312423412";
    enrolledUsers.push(enrolledUser);
    
    enrolledUser = new EnrolledUsers();
    enrolledUser.srNo=2;
    enrolledUser.first_name="yesha";
    enrolledUser.last_name="yash";
    enrolledUser.email="email@email.com";
    enrolledUser.contact="4312423412";
    enrolledUsers.push(enrolledUser);

    return enrolledUsers;
  }
  
  getResidingUser(accomodationId: number): ResidingUser[] {
    let residingUsers: ResidingUser[] = [];
    let residingUser: ResidingUser = new ResidingUser();
    residingUser.srNo=1;
    residingUser.first_name="Jonho";
    residingUser.last_name="Josh";
    residingUser.from_date= new Date();
    residingUser.documents_array=["https://content3.jdmagicbox.com/comp/tonk/z1/9999p1432.1432.140520202818.x3z1/catalogue/adhar-card-enrollment-centers-peeplu-tonk-aadhaar-card-agents-iqphud9ifj.jpg?clr=273f27","asdf"]
    residingUser.email="email@email.com";
    residingUser.contact="4312423412";
    residingUser.day_care_availed = true;
    residingUsers.push(residingUser);
    
    residingUser = new ResidingUser();
    residingUser.srNo=2;
    residingUser.first_name="yesha";
    residingUser.last_name="yash";
    residingUser.from_date= new Date();
    residingUser.documents_array=["asdf","asdf"]
    residingUser.day_care_availed = false
    residingUser.email="email@email.com";
    residingUser.contact="4312423412";
    residingUsers.push(residingUser);

    return residingUsers;
  }

}

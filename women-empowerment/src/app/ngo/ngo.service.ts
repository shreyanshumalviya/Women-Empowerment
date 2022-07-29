import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accommodation } from '../models/accomodation';
import { Course } from '../models/course';
import { EnrolledUsers } from '../models/enrolled-users';
import { NGO } from '../models/ngo';
import { ResidingUser } from '../models/residing-user';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
  static ngos: NGO[] = [];
  static courses: Course[] = [];
  constructor(private httpClient: HttpClient) {
    console.log("constructor", NgoService.ngos.length);

    let ngo = new NGO();
    ngo.name = "";
    ngo.address = ""
    ngo.contact = ""
    ngo.ngoId = 1
    ngo.password = "as"
    ngo.email = "as"
    ngo.description = ""
    ngo.verified = true;

    NgoService.ngos.push(ngo);
    console.log("constructor", NgoService.ngos.length);

  }

  public registerNGO(ngo: NGO): Observable<NGO> {
    console.log(JSON.stringify(ngo));

    return this.httpClient.post<NGO>("http://localhost:9090/ngo/register", ngo);
  }

  public login(ngo: NGO): Observable<NGO> {

    console.log(JSON.stringify(ngo));
    
    return this.httpClient.post<NGO>("http://localhost:9090/ngo/login", ngo);
    
  }

  public createCourse(course: Course):Observable<Course> {
    console.log(JSON.stringify(course));

    return this.httpClient.post<Course>("http://localhost:9090/course/register", course);
  }
  getEnrolledUsers(courseId: number): EnrolledUsers[] {
    let enrolledUsers: EnrolledUsers[] = [];
    let enrolledUser: EnrolledUsers = new EnrolledUsers();
    enrolledUser.srNo = 1;
    enrolledUser.first_name = "Jonho";
    enrolledUser.last_name = "Josh";
    enrolledUser.email = "email@email.com";
    enrolledUser.contact = "4312423412";
    enrolledUsers.push(enrolledUser);

    enrolledUser = new EnrolledUsers();
    enrolledUser.srNo = 2;
    enrolledUser.first_name = "yesha";
    enrolledUser.last_name = "yash";
    enrolledUser.email = "email@email.com";
    enrolledUser.contact = "4312423412";
    enrolledUsers.push(enrolledUser);

    return enrolledUsers;
  }

  getResidingUser(accomodationId: number): ResidingUser[] {
    let residingUsers: ResidingUser[] = [];
    let residingUser: ResidingUser = new ResidingUser();
    residingUser.srNo = 1;
    residingUser.first_name = "Jonho";
    residingUser.last_name = "Josh";
    residingUser.from_date = new Date();
    residingUser.documents_array = ["https://content3.jdmagicbox.com/comp/tonk/z1/9999p1432.1432.140520202818.x3z1/catalogue/adhar-card-enrollment-centers-peeplu-tonk-aadhaar-card-agents-iqphud9ifj.jpg?clr=273f27", "asdf"]
    residingUser.email = "email@email.com";
    residingUser.contact = "4312423412";
    residingUser.day_care_availed = true;
    residingUsers.push(residingUser);

    residingUser = new ResidingUser();
    residingUser.srNo = 2;
    residingUser.first_name = "yesha";
    residingUser.last_name = "yash";
    residingUser.from_date = new Date();
    residingUser.documents_array = ["asdf", "asdf"]
    residingUser.day_care_availed = false
    residingUser.email = "email@email.com";
    residingUser.contact = "4312423412";
    residingUsers.push(residingUser);

    return residingUsers;
  }

  getAccomodationsByNgoId(ngoId: number): Accommodation[] {
    let accommodations: Accommodation[] = [];
    let accommodation = new Accommodation();
    accommodation.id = 1;
    accommodation.ngo_id = ngoId;
    accommodation.state = "Madhya Pradesh"
    accommodation.city = "Narmadapuram"
    accommodation.address_line_1 = "Address is address and aredds s"
    accommodation.address_line_2 = "Address is address and aredds s"
    accommodation.pincode = "461001"
    accommodation.landmark = "This Building"
    accommodation.total_rooms = 24
    accommodation.rooms_available = 20
    accommodation.capacity = 3
    accommodation.day_care_center = false

    accommodations.push(accommodation);

    accommodation.id = 2;
    accommodation.ngo_id = ngoId;
    accommodation.state = "Madhya Pradesh"
    accommodation.city = "Narmadapuram"
    accommodation.address_line_1 = "Address is address and aredds s"
    accommodation.address_line_2 = "Address is address and aredds s"
    accommodation.pincode = "461001"
    accommodation.landmark = "This Building"
    accommodation.total_rooms = 24
    accommodation.rooms_available = 20
    accommodation.capacity = 3
    accommodation.day_care_center = false

    accommodations.push(accommodation);

    return accommodations;
  }

  getCoursesByNgoId(ngoId: number): Observable<Course[]> {
    return this.httpClient.get<Course[]>("http://localhost:9090/course/list-course-by-ngo/"+ngoId);

  }
}

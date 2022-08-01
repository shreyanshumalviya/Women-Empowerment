import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accommodation } from '../models/accomodation';
import { Accomodation_status } from '../models/accomodation-status';
import { Course } from '../models/course';
import { EnrolledUsers } from '../models/enrolled-users';
import { Enrollment } from '../models/enrollment';
import { NGO } from '../models/ngo';
import { NgoDocument } from '../models/ngo-document';
import { NgoStatus } from '../models/ngo-status';
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

  public createAccomodation(accomodation: Accommodation):Observable<Accommodation>{
    console.log(JSON.stringify(accomodation));
    
    return this.httpClient.post<Accommodation>("http://localhost:9090/accomodation/register", accomodation);
  }

  public createCourse(course: Course):Observable<Course> {
    console.log(JSON.stringify(course));

    return this.httpClient.post<Course>("http://localhost:9090/course/register", course);
  }
  getEnrolledUsers(courseId: number): Observable<Enrollment[]> {
    
    return this.httpClient.get<Enrollment[]>(`http://localhost:9090/course/list-enrollments-for-course/${courseId}`);
  }  
  public getResidingUser2(accomodationId: number): Observable<Accomodation_status[]> {
    
    return this.httpClient.get<Accomodation_status[]>(`http://localhost:9090/accomodation/list-resdents-for-accomodation/${accomodationId}`);
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

  getAccomodationsByNgoId(ngoId: number): Observable<Accommodation[]>{
    
    return this.httpClient.get<Accommodation[]>("http://localhost:9090/accomodation/list-accomodations-of-ngo/"+ngoId);

  }

  getCoursesByNgoId(ngoId: number): Observable<Course[]> {
    return this.httpClient.get<Course[]>("http://localhost:9090/course/list-course-by-ngo/"+ngoId);

  }

  getNgoStatus(ngoId:number):Observable<NgoStatus>{
    return this.httpClient.get<NgoStatus>("http://localhost:9090/ngo/status/"+ngoId);
  }

  uploadDoc(ngoDocument: NgoDocument):Observable<NgoDocument>{
    return this.httpClient.post<NgoDocument>("http://localhost:9090/ngo/upload_doc", ngoDocument);
  }
}
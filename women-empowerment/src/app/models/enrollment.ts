import { Course } from "./course";

export class Enrollment{
    enrollmentId: number;
    registrationDate: Date;
    course: Course;
    user: any;
}
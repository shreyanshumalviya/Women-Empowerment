export class Course {
    public id:number;
    public class:string;
    public ngo_id:number;
    public courseTitle: string;
    public description: string;
    public startDate: Date;
    public duration: number; 
    public courseMode: string; // online or offline
    public tags: string[]; // field in which the course trains
    public location: string;
    public jobOffered: boolean;// does this course offers a job
    public vacancy: number;// if job offered then how many vacancies are there?
    // no more than 30% of valacies can enroll for course

}
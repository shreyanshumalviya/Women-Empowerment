export class Course {
    public title: string;
    public description: string;
    public start_date: Date;
    public duration: number; 
    public mode_of_course: string; // online or offline
    public tags: string[]; // field in which the course trains
    public location: string;
    public job_offered: boolean;// does this course offers a job
    public vacancy: number;// if job offered then how many vacancies are there?
    // no more than 30% of valacies can enroll for course

}
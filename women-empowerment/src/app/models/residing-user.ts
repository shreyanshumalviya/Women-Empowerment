export class ResidingUser{
    public srNo: number;
    public first_name: string;
    public last_name: string;
    public from_date: Date;
    public day_care_availed: boolean;
    public documents_array: Array<string>;
    public email: string;
    public contact: string;

    // no more than 30% of valacies can enroll for course
}
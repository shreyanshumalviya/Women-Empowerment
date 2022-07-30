import { UserDocumentDetails } from './user-document-details';

export class UserRegisterDetails {
  firstName: string;
  middleName: string;
  lastName: string;

  email: string;
  password: string;
  contactNo: string;
  aadhaarNo: string;
  panNo: string;
  dob: Date;
  gender: Gender;
  jobStatus: JobStatus;
  jobTitle: string;
  salary: DoubleRange;
  residenceArea: ResidenceArea;
  maritalStatus: MaritalStatus;
  disabled: Disability;

  document: UserDocumentDetails;
}

enum Gender {
  MALE = 0,
  FEMALE = 1,
}

enum JobStatus {
  EMPLOYED = 0,
  UNEMPLOYED = 1,
}

enum ResidenceArea {
  URBAN = 0,
  RURAL = 1,
}

enum MaritalStatus {
  MARRIED = 0,
  UNMARRIED = 1,
  WIDOWED = 2,
  SEPARATED = 3,
}

enum Disability {
  YES = 0,
  NO = 1,
}

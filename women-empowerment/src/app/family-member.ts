import { UserProfileDetails } from './user-profile-details';

export class FamilyMember {
  familyId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: Gender;
  dob: Date;
  relation: string;
  aadhaarNo: string;
  userId: number;
}

enum Gender {
  MALE = 0,
  FEMALE = 1,
}

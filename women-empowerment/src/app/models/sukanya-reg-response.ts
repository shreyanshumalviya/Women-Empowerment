import { UserProfileDetails } from "../user-profile-details";
import { SukanyaDoc } from "./sukanya-doc";

export class SukanyaRegResponse{
    accountId: number;
    beneficiaryName: string;
    dob: string;
    adharNo: string;
    registrationDate: string;
    verified: boolean;
    sukanyaDoc: SukanyaDoc;
    user: UserProfileDetails;
}
import { Component, OnInit } from '@angular/core';
import { FamilyMember } from 'src/app/family-member';
import { UserId } from 'src/app/user-id';
import { UserServiceService } from 'src/app/user-service.service';

interface Relation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-family-details',
  templateUrl: './add-family-details.component.html',
  styleUrls: ['./add-family-details.component.css'],
})
export class AddFamilyDetailsComponent implements OnInit {
  relations: Relation[] = [
    { value: 'Father', viewValue: 'Father' },
    { value: 'Mother', viewValue: 'Mother' },
    { value: 'Daughter', viewValue: 'Daughter' },
    { value: 'Son', viewValue: 'Son' },
    { value: 'Husband', viewValue: 'Husband' },
    { value: 'Wife', viewValue: 'Wife' },
  ];

  familyState: string = 'addMember';
  familyMember: FamilyMember = new FamilyMember();
  userId: UserId = new UserId();
  familyMembers: FamilyMember[] = [];
  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userId.userId = JSON.parse(
      sessionStorage.getItem('userDetails')
    ).userId;
    this.getFamilyMembers();
  }

  toAddMember() {
    this.familyState = 'addMember';
    this.familyMember = new FamilyMember();
  }

  toUpdateMember(member: FamilyMember) {
    this.familyState = 'updateMember';
    this.familyMember = member;
  }

  addFamilyMember() {
    this.familyMember.userId = this.userId.userId;
    this.userService
      .addFamilyMember(this.familyMember)
      .subscribe((response) => {
        console.log(response);
        location.reload();
      });
  }

  getFamilyMembers() {
    this.userService.getFamilyMembers(this.userId).subscribe((response) => {
      this.familyMembers = response;
      console.log(this.familyMembers);
    });
  }
}

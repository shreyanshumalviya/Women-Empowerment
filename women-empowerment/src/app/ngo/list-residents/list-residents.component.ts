import { Component, OnInit } from '@angular/core';
import { ResidingUser } from 'src/app/models/residing-user';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-list-residents',
  templateUrl: './list-residents.component.html',
  styleUrls: ['./list-residents.component.css']
})
export class ListResidentsComponent implements OnInit {

  residingUsers: ResidingUser[] = []
  displayedColumns: string[] = ["srNo","name","from_date","email","contact","day_care_availed","documents"]
  constructor(private ngoService: NgoService) { }

  ngOnInit(): void {
    let accomodationId = 2;
    this.residingUsers = this.ngoService.getResidingUser(accomodationId);
  }

}

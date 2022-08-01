import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accomodation_status } from 'src/app/models/accomodation-status';
import { ResidingUser } from 'src/app/models/residing-user';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-list-residents',
  templateUrl: './list-residents.component.html',
  styleUrls: ['./list-residents.component.css']
})
export class ListResidentsComponent implements OnInit {

  residingUsers: Accomodation_status[] = []
  displayedColumns: string[] = ["srNo", "name", "from_date", "email", "contact", "day_care_availed", "documents"]
  constructor(private ngoService: NgoService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(s => {
      console.log(s["accomodationId"])
      let accomodationId = s["accomodationId"];

      this.ngoService.getResidingUser2(accomodationId).subscribe(residents => { this.residingUsers = residents });
    });
    
  }

}

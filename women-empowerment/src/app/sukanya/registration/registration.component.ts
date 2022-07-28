import { Component, OnInit } from '@angular/core';
import { SukanyaRegistration } from 'src/app/models/sukanya-registration';
import { SukanyaService } from 'src/app/sukanya.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 sukanyaRegistration:SukanyaRegistration=new SukanyaRegistration();

  constructor(private sukanyaService:SukanyaService) { }

  ngOnInit(): void {
  }
register(){
  console.log("Submit");
  this.sukanyaService.register(this.sukanyaRegistration)
  .subscribe(msg=>{console.log(msg);
  })
}
}

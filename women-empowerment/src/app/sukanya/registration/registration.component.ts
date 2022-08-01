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
 maxDate = new Date();
 minDate=new Date();
 errorMessage="";

  constructor(private sukanyaService:SukanyaService) { }

  ngOnInit(): void {
    this.minDate.setFullYear(this.minDate.getFullYear() - 10);
  }
register(){
  if(this.sukanyaRegistration.firstName===undefined || this.sukanyaRegistration.firstName===""){
    this.errorMessage="Please Enter First Name";
    return ;
  }if(this.sukanyaRegistration.lastName===undefined || this.sukanyaRegistration.lastName===""){
    this.errorMessage="Please Enter Last Name";
    return ;
  }
  if(this.sukanyaRegistration.dateOfBirth===undefined){
    this.errorMessage="Please Date of Birth";
    return ;
  }
  if(this.sukanyaRegistration.aadharNumber===undefined || this.sukanyaRegistration.aadharNumber==="" ||this.sukanyaRegistration.aadharNumber.length<12){
    this.errorMessage="Please Enter Valid Aadhar Number";
    return ;
  }


  console.log("Submit");
  this.sukanyaService.register(this.sukanyaRegistration)
  .subscribe(msg=>{console.log(msg);
  })
}
}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/document.service';
import { SukanyaDoc } from 'src/app/models/sukanya-doc';
import { SukanyaRegistration } from 'src/app/models/sukanya-registration';
import { SukanyaService } from 'src/app/sukanya.service';
import { UserProfileDetails } from 'src/app/user-profile-details';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  selectedFiles: any[] = [{ name: "Select File" }]
  sukanyaRegistration:SukanyaRegistration=new SukanyaRegistration();
  sukanyaDoc:SukanyaDoc= new SukanyaDoc();
  maxDate = new Date();
  minDate=new Date();
  errorMessage="";
  user:UserProfileDetails;

  constructor(private sukanyaService:SukanyaService, private documentService: DocumentService, private router:Router, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.minDate.setFullYear(this.minDate.getFullYear() - 10);
    this.user = JSON.parse(sessionStorage.getItem('userDetails'));
    if(sessionStorage.getItem('userDetails')===null || sessionStorage.getItem('userDetails')===undefined){
      this.router.navigateByUrl('userLoginAndRegister');
    }
  }

  selectFile(event) {
    console.log(event.target.files);

    this.selectedFiles = event.target.files;
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

    this.sukanyaRegistration.userId= this.user.userId;
    console.log("Submit");
    this.sukanyaService.register(this.sukanyaRegistration)
    .subscribe(msg=>{console.log(msg);
      
      const file: File = this.selectedFiles[0];
      this.documentService.uploadFile(file).subscribe(fileName => {
        console.log(fileName);
        this.sukanyaDoc.aadhaarNo =  this.sukanyaRegistration.aadharNumber.toString();
        this.sukanyaDoc.aadhaarLink = fileName;
        this.sukanyaDoc.sukanyaAccoutnId = msg.accountId;

        // hit api to upload NgoDoc
        this.sukanyaService.addSukanyaDoc(this.sukanyaDoc).subscribe(ngoDoc=>{
          console.log(ngoDoc);
          this.snackBar.open("Registered", "Ok", {duration:3000})
        });

      })
    })
  } 
}

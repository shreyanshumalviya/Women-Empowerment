import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/document.service';
import { NGO } from 'src/app/models/ngo';
import { NgoDocument } from 'src/app/models/ngo-document';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
})
export class NgoLoginComponent implements OnInit {
  selectedFiles: any[] = [{ name: "Select File" }]
  errorMessage: string = ""
  showLoginPassword: Boolean = false;
  isLoginForm: Boolean = true;
  ngo: NGO = new NGO();
  regngo: NGO = new NGO();
  showRegisterPassword: Boolean = false;
  confirmPassword: string = "";
  ngoDocument: NgoDocument = new NgoDocument();
  showRegisterConfirmPassword: Boolean = false;

  constructor(private ngoService: NgoService, private documentService: DocumentService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("loggedInNgo") != undefined || sessionStorage.getItem("loggedInNgo") != null) {
      this.router.navigateByUrl('/ngo/welcome');
    }
  }
  selectFile(event) {
    console.log(event.target.files);

    this.selectedFiles = event.target.files;
  }

  public login(): void {
    console.log("login");

    if (this.ngo.email === "") {
      this.errorMessage = "Please enter email"
      return;
    }

    if (this.ngo.password === "") {
      this.errorMessage = "Please enter password"
      return;
    }

    this.ngoService.login(this.ngo).subscribe(ngo => {
      console.log(JSON.stringify(ngo));
      if (ngo === null) {
        this.errorMessage = "Incorrect username or password"
        return;
      }
      sessionStorage.setItem("loggedInNgo", JSON.stringify(ngo));
      this.errorMessage = ""
      this.router.navigate(["/ngo/welcome"]);
    });
  }

  public toggleLoginPasswordVisibility() {
    this.showLoginPassword = !this.showLoginPassword;
  }

  public showRegisterPage() {
    this.isLoginForm = !this.isLoginForm
  }

  public toggleRegisterPasswordVisibility() {
    this.showRegisterPassword = !this.showRegisterPassword
  }

  public toggleRegisterConfirmPasswordVisibility() {
    this.showRegisterConfirmPassword = !this.showRegisterConfirmPassword;
  }


  public register(a: string): void {
    if (a !== "sub") return;
    console.log("register");
    console.log(this.regngo.name);
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (this.regngo.name === undefined || this.regngo.name === "") {
      this.errorMessage = "Enter NGO name";
      return;
    }
    if (this.regngo.contact === undefined || this.regngo.contact === "") {
      this.errorMessage = "Enter NGO contact";
      return;
    }
    if (this.regngo.email === undefined || this.regngo.email === "") {
      this.errorMessage = "Enter NGO email";
      return;
    }
    if (!this.regngo.email.match(regexEmail)) {
      this.errorMessage = "Enter Valid Email";
      return;
    }
    if (this.regngo.description === undefined || this.regngo.description.length < 30) {
      this.errorMessage = "Description should be atleast 30 characters";
      return;
    }
    if (this.confirmPassword !== this.regngo.password) {
      this.errorMessage = "Passwords do not match";
      return;
    }


    this.ngoService.registerNGO(this.regngo).subscribe(ngo => {
      console.log(JSON.stringify(ngo));
      this.showRegisterPage();
      this.errorMessage = "Login to continue";
      if (ngo == null) {
        this.errorMessage = "Cannot register, Try Again"
        return;

      }
      this.ngo = new NGO();

      const file: File = this.selectedFiles[0];
      console.log(file);;


      this.documentService.uploadFile(file).subscribe(fileName => {
        console.log(fileName);
        this.ngoDocument.certificateLink = fileName;
        this.ngoDocument.certificateNo = "asdfa";
        this.ngoDocument.ngoId = ngo.ngoId;

        // hit api to upload NgoDoc
        this.ngoService.uploadDoc(this.ngoDocument).subscribe(ngoDoc=>{
          console.log(ngoDoc);
          
        });

      })
    });
  }
}

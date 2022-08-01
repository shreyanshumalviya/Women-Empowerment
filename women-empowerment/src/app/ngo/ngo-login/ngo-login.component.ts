import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGO } from 'src/app/models/ngo';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
})
export class NgoLoginComponent implements OnInit {

  errorMessage: string = ""
  showLoginPassword: Boolean = false;
  isLoginForm: Boolean = true;
  ngo: NGO = new NGO();
  regngo: NGO = new NGO();
  showRegisterPassword: Boolean = false;
  confirmPassword: string = "";
  showRegisterConfirmPassword: Boolean = false;

  constructor(private ngoService: NgoService, private router: Router) { }

  ngOnInit(): void {
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
      this.router.navigate(["/ngo/courses"]);
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


  public register(): void {
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
    });
  }
}

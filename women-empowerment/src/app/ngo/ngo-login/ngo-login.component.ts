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
  showRegisterConfirmPassword: Boolean = false;

  constructor(private ngoService: NgoService,private router: Router) { }

  ngOnInit(): void {
  }

  public login(): void {
    console.log("login");

    this.ngoService.login(this.ngo).subscribe(ngo => {
      console.log(JSON.stringify(ngo));
      if (ngo === null) {
        this.errorMessage = "Incorrect username or password"
        return;
      }
      sessionStorage.setItem("loggedInNgo", JSON.stringify(ngo));
      this.errorMessage = ""
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

    this.ngoService.registerNGO(this.regngo).subscribe(ngo => {
      console.log(JSON.stringify(ngo));

    });
  }
}

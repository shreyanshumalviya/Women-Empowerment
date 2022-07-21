import { Component, OnInit } from '@angular/core';
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
  ngo: any = {}
  regngo: any = {}
  showRegisterPassword: Boolean = false;
  showRegisterConfirmPassword: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public login(): void {
    let successfulLogin: Boolean = new NgoService().login(this.ngo.username, this.ngo.password);
    console.log(successfulLogin);
    if (!successfulLogin) { this.errorMessage = "Incorrect username or password" }
    else {
      this.errorMessage = ""
    }
  }

  public toggleLoginPasswordVisibility(){
    this.showLoginPassword=!this.showLoginPassword;
  }

  public showRegisterPage(){
    this.isLoginForm=!this.isLoginForm
  }

  public toggleRegisterPasswordVisibility(){
    this.showRegisterPassword=!this.showRegisterPassword
  }

  public toggleRegisterConfirmPasswordVisibility(){
    this.showRegisterConfirmPassword=!this.showRegisterConfirmPassword;
  }

  
  public register(): void {
    console.log("register");

    new NgoService().registerNGO(this.regngo);
  }
}

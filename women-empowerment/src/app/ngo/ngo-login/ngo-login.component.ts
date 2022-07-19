import { Component, OnInit } from '@angular/core';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
})
export class NgoLoginComponent implements OnInit {

  errorMessage: string = ""
  ngo: any = {}

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

}

import { Component, OnInit } from '@angular/core';
import { NGO } from 'src/app/models/ngo';
import { NgoService } from '../ngo.service';

@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NgoRegisterComponent implements OnInit {

  public ngo: any = new NGO();
  constructor(private ngoService: NgoService) { }
  ngOnInit(): void {
  }

  public register(): void {
    console.log("register");

    this.ngoService.registerNGO(this.ngo);
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgoHomeComponent } from './ngo/ngo-home/ngo-home.component';
import { NgoLoginComponent } from './ngo/ngo-login/ngo-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NgoHomeComponent,
    NgoLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { LegislationandpolicyComponent } from './home/legislationandpolicy/legislationandpolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    LegislationandpolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

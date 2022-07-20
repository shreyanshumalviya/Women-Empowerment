import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeModule } from './home/home.module';
import { FaqComponent } from './home/faq/faq.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
>>>>>>> ad246e66d5a05c181e419ffd9de0541aecfa7f56

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HomeModule
=======
    BrowserAnimationsModule,
    MatButtonModule
>>>>>>> ad246e66d5a05c181e419ffd9de0541aecfa7f56
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

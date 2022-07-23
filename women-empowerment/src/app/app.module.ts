import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { NgoHomeComponent } from './ngo/ngo-home/ngo-home.component';
import { NgoLoginComponent } from './ngo/ngo-login/ngo-login.component';
import { NgoRegisterComponent } from './ngo/ngo-register/ngo-register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Stashed changes
>>>>>>> Stashed changes
import { HomeModule } from './home/home.module';
import { FaqComponent } from './home/faq/faq.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
=======
>>>>>>> ad246e66d5a05c181e419ffd9de0541aecfa7f56
=======
import { AdminAboutUsComponent } from './Admin/admin-aboutUs/admin-about-us.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminNgoComponent } from './Admin/admin-ngo/admin-ngo.component';
import { AdminSukayaYojanaComponent } from './Admin/admin-sukaya-yojana/admin-sukaya-yojana.component';
import { AdminStepComponent } from './Admin/admin-step/admin-step.component';
import { AdminAccomodationsComponent } from './Admin/admin-accomodations/admin-accomodations.component';
import { StepHomeComponent } from './step-home/step-home.component';
import { UserLoginAndRegisterComponent } from './user-login-and-register/user-login-and-register.component';
import { HomeModule } from './home/home.module';
import { FaqComponent } from './home/faq/faq.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
>>>>>>> 64191b9787c358b22fef56599658bd84b9bb592a
>>>>>>> Stashed changes
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
    MainNavComponent,
    FooterComponent,
>>>>>>> Stashed changes
    
=======
    NgoHomeComponent,
    NgoLoginComponent,
    NgoRegisterComponent,
    StepHomeComponent,
    UserLoginAndRegisterComponent,
    AdminAboutUsComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminNgoComponent,
    AdminSukayaYojanaComponent,
    AdminStepComponent,
    AdminAccomodationsComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
<<<<<<< Updated upstream
    HomeModule,
<<<<<<< Updated upstream
    BrowserAnimationsModule,
    MatButtonModule
  ],
=======
BrowserAnimationsModule,
MatButtonModule,
LayoutModule,
MatToolbarModule,
MatSidenavModule,
MatIconModule,
MatListModule
],
=======
<<<<<<< HEAD
    HomeModule
=======
    BrowserAnimationsModule,
    MatButtonModule
>>>>>>> ad246e66d5a05c181e419ffd9de0541aecfa7f56
=======
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
>>>>>>> 64191b9787c358b22fef56599658bd84b9bb592a
  ],
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

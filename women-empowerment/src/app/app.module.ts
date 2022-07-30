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
import { AdminAboutUsComponent } from './Admin/admin-aboutUs/admin-about-us.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgoDisplayTableComponent } from './Admin/ngo-display-table/ngo-display-table.component';
import { AdminLandingPComponent } from './Admin/admin-landing-p/admin-landing-p.component';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
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
    NgoDisplayTableComponent,
    AdminLandingPComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    MatSlideToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    AppRoutingModule,
    MatTableModule,
    NgImageSliderModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

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

// import { MatButtonModule } from '@angular/material/button';
import { MainNavComponent } from './main-nav/main-nav.component';
// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgoDisplayTableComponent } from './Admin/ngo-display-table/ngo-display-table.component';
import { AdminLandingPComponent } from './Admin/admin-landing-p/admin-landing-p.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RegistrationComponent } from './sukanya/registration/registration.component';
import { StepCoursesComponent } from './step-courses/step-courses.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { CreateCourseComponent } from './ngo/create-course/create-course.component';
import { ListUsersComponent } from './ngo/list-users/list-users.component';
import { ListResidentsComponent } from './ngo/list-residents/list-residents.component';
import { ListCoursesComponent } from './ngo/list-courses/list-courses.component';
import { ListAccomodationsComponent } from './ngo/list-accomodations/list-accomodations.component';
import { CreateAccomodationComponent } from './ngo/create-accomodation/create-accomodation.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateUserDetailsComponent } from './user-dashboard/update-user-details/update-user-details.component';
import { UpdateUserPasswordComponent } from './user-dashboard/update-user-password/update-user-password.component';
import { AddFamilyDetailsComponent } from './user-dashboard/add-family-details/add-family-details.component';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent,
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
    RegistrationComponent,
    NgoDisplayTableComponent,
    AdminLandingPComponent,
    StepCoursesComponent,
    CreateCourseComponent,
    ListUsersComponent,
    ListResidentsComponent,
    ListCoursesComponent,
    ListAccomodationsComponent,
    CreateAccomodationComponent,
    UserDashboardComponent,
    UpdateUserDetailsComponent,
    UpdateUserPasswordComponent,
    AddFamilyDetailsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HomeModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatChipsModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

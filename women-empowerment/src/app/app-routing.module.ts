import { NgModule } from '@angular/core';
import { AdminAboutUsComponent } from './Admin/admin-aboutUs/admin-about-us.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminNgoComponent } from './Admin/admin-ngo/admin-ngo.component';
import { AdminStepComponent } from './Admin/admin-step/admin-step.component';
import { AdminSukayaYojanaComponent } from './Admin/admin-sukaya-yojana/admin-sukaya-yojana.component';
import { AdminAccomodationsComponent } from './Admin/admin-accomodations/admin-accomodations.component';
import { RouterModule, Routes, Router, Route } from '@angular/router';
import { FaqComponent } from './home/faq/faq.component';
import { StepHomeComponent } from './step-home/step-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginAndRegisterComponent } from './user-login-and-register/user-login-and-register.component';
import { NgoHomeComponent } from './ngo/ngo-home/ngo-home.component';
import { RegistrationComponent } from './sukanya/registration/registration.component';
import { NgoDisplayTableComponent } from './Admin/ngo-display-table/ngo-display-table.component';
import { AdminLandingPComponent } from './Admin/admin-landing-p/admin-landing-p.component';
import { CreateCourseComponent } from './ngo/create-course/create-course.component';
import { ListUsersComponent } from './ngo/list-users/list-users.component';
import { ListResidentsComponent } from './ngo/list-residents/list-residents.component';
import { ListCoursesComponent } from './ngo/list-courses/list-courses.component';
import { ListAccomodationsComponent } from './ngo/list-accomodations/list-accomodations.component';
import { CreateAccomodationComponent } from './ngo/create-accomodation/create-accomodation.component';
import { StepCoursesComponent } from './step-courses/step-courses.component';
import { LegislationComponent } from './home/legislation/legislation.component';
import { NgoLoginComponent } from './ngo/ngo-login/ngo-login.component';
import { NgoRegisterComponent } from './ngo/ngo-register/ngo-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsComponent } from './home/terms/terms.component';
import { AccomodationStatusComponent } from './ngo/accomodation-status/accomodation-status.component';
import { NgoConatinerComponent } from './ngo/ngo-conatiner/ngo-conatiner.component';
import { WelcomeComponent } from './ngo/welcome/welcome.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';

const routes: Routes = [

  {path:'AboutUs',component:AboutUsComponent},
  {
    path: 'AboutAdmin',
    component: AdminAboutUsComponent,
  },
  {path:'accomodationStatus',component:AccomodationStatusComponent},
  {path:'terms',component:TermsComponent},
  { path: 'ngo/home', component: NgoHomeComponent },
  {
    children: [
      { path: "create_course", component: CreateCourseComponent },
      { path: "create_accomodation", component: CreateAccomodationComponent },
      { path: "enrolled_users/:courseId", component: ListUsersComponent },
      { path: "residing_users/:accomodationId", component: ListResidentsComponent },
      { path: "courses", component: ListCoursesComponent },
      { path: "welcome", component: WelcomeComponent },
      { path: "accomodations", component: ListAccomodationsComponent }
    ],
    component: NgoConatinerComponent,
    path: 'ngo'
  },
  {path:"ngoLogin",component:NgoLoginComponent},
  {path:"ngoRegister",component:NgoRegisterComponent},
  { path: 'adminLoginLink', component: AdminLoginComponent },
  {
    path: 'adminDashboardLink',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'adminNgoLink',
        component: AdminNgoComponent,
      },
      {
        path: 'adminStepLink',
        component: AdminStepComponent,
      },
      {
        path: 'adminSukayaYojanaLink',
        component: AdminSukayaYojanaComponent,
      },
      {
        path: 'adminAccomodationsLink',
        component: AdminAccomodationsComponent,
      },

      {
        path: 'adminLandPage',
        component: AdminLandingPComponent,
      },
    ],
  },
  {path:'contactUs',component:ContactUsComponent},
  { path: 'stepHome', component: StepHomeComponent },
  { path: 'userLoginAndRegister', component: UserLoginAndRegisterComponent },
  { path: 'faq/Admin', component: FaqComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'sukanya-registration', component: RegistrationComponent },
  {path:'legislation',component:LegislationComponent},
  { path: 'step-courses', component: StepCoursesComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
  {path:'privacy',component:PrivacyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

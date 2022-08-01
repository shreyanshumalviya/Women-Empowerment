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
import { NgoConatinerComponent } from './ngo/ngo-conatiner/ngo-conatiner.component';
import { WelcomeComponent } from './ngo/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'AboutAdmin',
    component: AdminAboutUsComponent,
  },
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
  { path: 'stepHome', component: StepHomeComponent },
  { path: 'userLoginAndRegister', component: UserLoginAndRegisterComponent },
  { path: 'faq/Admin', component: FaqComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'sukanya-registration', component: RegistrationComponent },
  {path:'legislation',component:LegislationComponent},
  { path: 'step-courses', component: StepCoursesComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

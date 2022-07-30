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
import { UserLoginAndRegisterComponent } from './user-login-and-register/user-login-and-register.component';
import { NgoHomeComponent } from './ngo/ngo-home/ngo-home.component';
import { CreateCourseComponent } from './ngo/create-course/create-course.component';
import { ListUsersComponent } from './ngo/list-users/list-users.component';
import { ListResidentsComponent } from './ngo/list-residents/list-residents.component';
import { ListCoursesComponent } from './ngo/list-courses/list-courses.component';
import { ListAccomodationsComponent } from './ngo/list-accomodations/list-accomodations.component';
import { CreateAccomodationComponent } from './ngo/create-accomodation/create-accomodation.component';

const routes: Routes = [
  { path: '', redirectTo: 'AboutAdmin', pathMatch: 'full' },
  {
    path: 'AboutAdmin',
    component: AdminAboutUsComponent,
  },
  {
    children: [
      { path: "create_course", component: CreateCourseComponent },
      { path: "create_accomodation", component: CreateAccomodationComponent },
      { path: "enrolled_users/:courseId", component: ListUsersComponent },
      { path: "residing_users/:accomodationId", component: ListResidentsComponent },
      { path: "home", component: NgoHomeComponent },
      { path: "courses", component: ListCoursesComponent },
      { path: "accomodations", component: ListAccomodationsComponent }
    ],
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

    ],
  },
  { path: 'stepHome', component: StepHomeComponent },
  { path: 'userLoginAndRegister', component: UserLoginAndRegisterComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

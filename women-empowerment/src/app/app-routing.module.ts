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

const routes: Routes = [
  { path: '', redirectTo: 'AboutAdmin', pathMatch: 'full' },
  {
    path: 'AboutAdmin',
    component: AdminAboutUsComponent,
  },
  { path: 'ngo', component: NgoHomeComponent },
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

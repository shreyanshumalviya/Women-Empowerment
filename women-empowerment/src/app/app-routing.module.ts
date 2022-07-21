import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAboutUsComponent } from './Admin/admin-aboutUs/admin-about-us.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminNgoComponent } from './Admin/admin-ngo/admin-ngo.component';
import { AdminStepComponent } from './Admin/admin-step/admin-step.component';
import { AdminSukayaYojanaComponent } from './Admin/admin-sukaya-yojana/admin-sukaya-yojana.component';
import { AdminAccomodationsComponent } from './Admin/admin-accomodations/admin-accomodations.component';

const routes: Routes = [
  { path: '', redirectTo: 'AboutAdmin', pathMatch: 'full' },
  {
    path: 'AboutAdmin',
    component: AdminAboutUsComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

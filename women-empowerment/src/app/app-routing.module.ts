import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, Route } from '@angular/router';
import { FaqComponent } from './home/faq/faq.component';
import { StepHomeComponent } from './step-home/step-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginAndRegisterComponent } from './user-login-and-register/user-login-and-register.component';

const routes: Routes = [
  { path: 'stepHome', component: StepHomeComponent },
  { path: 'userLoginAndRegister', component: UserLoginAndRegisterComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

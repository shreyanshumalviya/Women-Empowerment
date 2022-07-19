import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepHomeComponent } from './step-home/step-home.component';
import { UserLoginAndRegisterComponent } from './user-login-and-register/user-login-and-register.component';

const routes: Routes = [
  { path: 'stepHome', component: StepHomeComponent },
  { path: 'userLoginAndRegister', component: UserLoginAndRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

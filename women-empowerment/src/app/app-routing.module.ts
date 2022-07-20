import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminAboutUsComponent } from './Admin/admin-aboutUs/admin-about-us.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home/admin-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'AboutAdmin', pathMatch: 'full' },
  {
    path: 'AboutAdmin',
    component: AdminAboutUsComponent,
  },
  { path: 'adminLoginLink', component: AdminLoginComponent },
  { path: 'adminHomeLink', component: AdminHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepHomeComponent } from './step-home/step-home.component';
import { UserLoginAndRegisterComponent } from './user-login-and-register/user-login-and-register.component';
import { HomeModule } from './home/home.module';
import { FaqComponent } from './home/faq/faq.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UpdateUserDetailsComponent } from './user-dashboard/update-user-details/update-user-details.component';
import { UpdateUserPasswordComponent } from './user-dashboard/update-user-password/update-user-password.component';
import { AddFamilyDetailsComponent } from './user-dashboard/add-family-details/add-family-details.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    StepHomeComponent,
    UserLoginAndRegisterComponent,
    UserDashboardComponent,
    UpdateUserDetailsComponent,
    UpdateUserPasswordComponent,
    AddFamilyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

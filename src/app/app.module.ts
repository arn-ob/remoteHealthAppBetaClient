import { ValidationCheckService } from './services/validation-check/validation-check.service';
import { JwtHelper } from 'angular2-jwt';
import { AuthenticationService } from './services/auth/authentication.service';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './sign-up-process/signup/signup.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { SignupDoctorComponent } from './sign-up-process/signup-doctor/signup-doctor.component';
import { SignupNurseComponent } from './sign-up-process/signup-nurse/signup-nurse.component';
import { SignupPatientComponent } from './sign-up-process/signup-patient/signup-patient.component';
import { LogoutComponent } from './logout/logout.component';
import { SqlpostService } from './services/sqlpost/sqlpost.service';
import { AdminComponent } from './admin/admin.component';
import { DoctorInformationComponent } from './sign-up-process/doctor-information/doctor-information.component';
import { NurseInformationComponent } from './sign-up-process/nurse-information/nurse-information.component';
import { PatientsInformationComponent } from './sign-up-process/patients-information/patients-information.component';


const appRoutes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'form', component: FormComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-doctor', component: SignupDoctorComponent },
  { path: 'signup-nurse', component: SignupNurseComponent },
  { path: 'signup-patient', component: SignupPatientComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'datasearch', component: SearchComponent },
  { path: 'doctor-information', component: DoctorInformationComponent },
  { path: 'nurse-information', component: NurseInformationComponent },
  { path: 'patients-information', component: PatientsInformationComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NotFoundComponent,
    SigninComponent,
    SignupComponent,
    SearchComponent,
    NavbarComponent,
    IndexComponent,
    SignupDoctorComponent,
    SignupNurseComponent,
    SignupPatientComponent,
    LogoutComponent,
    AdminComponent,
    DoctorInformationComponent,
    NurseInformationComponent,
    PatientsInformationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  providers: [
    SqlpostService,
    CookieService,
    AuthenticationService,
    JwtHelper,
    ValidationCheckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

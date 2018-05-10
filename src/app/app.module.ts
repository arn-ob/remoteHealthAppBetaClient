import { EcgDataProcessingService } from './_dashboard/doctor/doctor-service/ecg-data-processing.service';
import { SqlGetService } from './services/SQL-get/sql-get.service';
import { RequestPatientsDataService } from './_dashboard/patients/patients-service/request-patients-data.service';
import { ValidationCheckService } from './services/validation-check/validation-check.service';
import { JwtHelper } from 'angular2-jwt';
import { AuthenticationService } from './services/auth/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular2-chartjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';


import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './sign-in-process/signin/signin.component';
import { SignupComponent } from './sign-up-process/signup/signup.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { SignupDoctorComponent } from './sign-up-process/signup-doctor/signup-doctor.component';
import { SignupNurseComponent } from './sign-up-process/signup-nurse/signup-nurse.component';
import { SignupPatientComponent } from './sign-up-process/signup-patient/signup-patient.component';
import { LogoutComponent } from './logout/logout.component';
import { SqlpostService } from './services/SQL-post/sqlpost.service';
import { AdminComponent } from './admin/admin.component';
import { DoctorInformationComponent } from './sign-up-process/doctor-information/doctor-information.component';
import { NurseInformationComponent } from './sign-up-process/nurse-information/nurse-information.component';
import { PatientsInformationComponent } from './sign-up-process/patients-information/patients-information.component';
import { RoleSelectionComponent } from './sign-in-process/role-selection/role-selection.component';
import { RoleSelectService } from './services/role-select/role-select.service';
import { ExistingUserNewUserRegComponent } from './sign-up-process/existing-user/existing-user-new-user-reg.component';
import { PatientsDashboardComponent } from './_dashboard/patients/patients-dashboard/patients-dashboard.component';
import { DoctorDashboardComponent } from './_dashboard/doctor/doctor-dashboard/doctor-dashboard.component';
import { NurseDashboardComponent } from './_dashboard/nurse/nurse-dashboard/nurse-dashboard.component';
import { PatientsRequestComponent } from './_dashboard/patients/patients-admission-request/patients-request.component';
import { DoctorInfoEditComponent } from './_dashboard/doctor/doctor-info-edit/doctor-info-edit.component';
import { PatientsDetailsViewComponent } from './_dashboard/doctor/patients-details-view/patients-details-view.component';
import { PatientsCheckupDetailsComponent } from './_dashboard/doctor/patients-checkup-details/patients-checkup-details.component';
import { PatientsCheckupRequestComponent } from './_dashboard/patients/patients-checkup-request/patients-checkup-request.component';
import { AdminDashboardComponent } from './_dashboard/admin/admin-dashboard/admin-dashboard.component';
import { NewDoctorRequestComponent,
          AllowDoctorComponent,
          DenyDoctorComponent } from './_dashboard/admin/new-doctor-request/new-doctor-request.component';
import { NewPatientsRequestComponent,
          AllowComponent,
          DenyComponent } from './_dashboard/admin/new-patients-request/new-patients-request.component';
import { HospitalManageComponent, HospitallAddComponent } from './_dashboard/admin/hospital-manage/hospital-manage.component';
import { PatientsAdmissionDetailsComponent } from './_dashboard/patients/patients-admission-details/patients-admission-details.component';



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
  { path: 'select-role', component: RoleSelectionComponent },
  { path: 'existing-user', component: ExistingUserNewUserRegComponent },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'nurse-dashboard', component: NurseDashboardComponent },
  { path: 'patients-dashboard', component: PatientsDashboardComponent },
  { path: 'patients-admission-request', component: PatientsRequestComponent },
  { path: 'doctor-info-edit', component: DoctorInfoEditComponent },
  { path: 'patients-details-view', component: PatientsDetailsViewComponent },
  { path: 'patients-checkup-details', component: PatientsCheckupDetailsComponent },
  { path: 'patients-checkup-request', component: PatientsCheckupRequestComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'new-doctor-request', component: NewDoctorRequestComponent},
  { path: 'new-patients-request', component: NewPatientsRequestComponent},
  { path: 'hospital-manage', component: HospitalManageComponent},
  { path: 'patients-admission-details', component: PatientsAdmissionDetailsComponent},
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
    RoleSelectionComponent,
    ExistingUserNewUserRegComponent,
    PatientsDashboardComponent,
    DoctorDashboardComponent,
    NurseDashboardComponent,
    PatientsRequestComponent,
    DoctorInfoEditComponent,
    PatientsDetailsViewComponent,
    PatientsCheckupDetailsComponent,
    PatientsCheckupRequestComponent,
    AdminDashboardComponent,
    NewDoctorRequestComponent,
    NewPatientsRequestComponent,
    AllowComponent,
    DenyComponent,
    AllowDoctorComponent,
    DenyDoctorComponent,
    HospitalManageComponent,
    HospitallAddComponent,
    PatientsAdmissionDetailsComponent
  ],
  entryComponents: [
    NewDoctorRequestComponent,
    NewPatientsRequestComponent,
    AllowComponent,
    DenyComponent,
    AllowDoctorComponent,
    DenyDoctorComponent,
    HospitalManageComponent,
    HospitallAddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  providers: [
    SqlpostService,
    SqlGetService,
    CookieService,
    AuthenticationService,
    JwtHelper,
    ValidationCheckService,
    RoleSelectService,
    RequestPatientsDataService,
    EcgDataProcessingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

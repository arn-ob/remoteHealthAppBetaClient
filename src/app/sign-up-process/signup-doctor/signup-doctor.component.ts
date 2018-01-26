import { AuthenticationService } from './../../services/auth/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms/src/directives/default_value_accessor';
import { SqlpostService } from '../../services/SQL-post/sqlpost.service';
import { ValidationCheckService } from '../../services/validation-check/validation-check.service';

@Component({
  selector: 'app-signup-doctor',
  templateUrl: './signup-doctor.component.html',
  styleUrls: ['./signup-doctor.component.css']
})

export class SignupDoctorComponent {

  name: any;
  pass: any;
  email: any;
  Repass: any;
  ifNotClick: any;
  disabled: any;

  doctor = true;
  error = false;
  checking = false;
  success = false;
  formVisible = true;

  // Constructor Function
  constructor(
    private service: SqlpostService,
    private router: Router,
    private auth: AuthenticationService,
    private uservalidation: ValidationCheckService
  ) { }

  // onSubmit() { this.submitted = true; }
  ReqSubmit() {
    if (this.disabled === true) {
      this.checking = true;
      this.formVisible = false; // Hide the form

      const data = { email: this.email, password: this.pass, isdoctor: this.doctor };

      this.service.postRequest('insert-doctor', data).subscribe(
        response => {
          this.checking = false;
          this.success = true; // Show the success message
          this.auth.just_signup(response.json().token);
          this.router.navigate(['/doctor-information']);
        },
        err => {
          // console.log('error got: ' + err);
          this.checking = false;
          this.error = true;
        }
      );
    } else {
      this.ifNotClick = true;
    }
  }

  i_agree($event) {
    console.log($event.explicitOriginalTarget.checked);
    this.disabled = $event.explicitOriginalTarget.checked;
    if ($event.explicitOriginalTarget.checked === false) {
      this.ifNotClick = false;
    } else {
      this.ifNotClick = true;
    }
    console.log(this.ifNotClick);
  }

}

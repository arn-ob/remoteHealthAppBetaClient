import { Router } from '@angular/router';
import { SqlpostService } from './../../services/sqlpost/sqlpost.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.component.html',
  styleUrls: ['./signup-patient.component.css']
})
export class SignupPatientComponent {
  // Server site error was not handled
  // If return was success then it is ok if its not then it will crash the server
  // Anguler will return null or return

  name: any;
  pass: any;
  email: any;
  Repass: any;
  ifNotClick: any;
  disabled: any;

  patients = true;
  error = false;
  success = false;
  formVisible = true;
  checking = false;

  // Constructor Function
  constructor(
    private service: SqlpostService,
    private router: Router,
    private auth: AuthenticationService
  ) {}

  // onSubmit() { this.submitted = true; }
  ReqSubmit() {
    if (this.disabled === true) {
      this.checking = true;
      const data = { email: this.email, password: this.pass, ispatients: this.patients};
      console.log(data);
      this.formVisible = false; // Hide the form
      this.service.postRequest('insert-patient', data).subscribe(
        response => {
          this.checking = false;
          this.success = true; // Show the success message
          this.auth.just_signup(response.json().token);
          this.router.navigate(['/patients-information']);
        },
        err => {
          this.checking = false;
          this.error = true;
        });
    }
  }

  i_agree($event) {
    console.log($event.explicitOriginalTarget.checked);
    this.disabled = $event.explicitOriginalTarget.checked;
    if ($event.explicitOriginalTarget.checked === false) {
      this.ifNotClick = false;
    }else {
      this.ifNotClick = true;
    }
    console.log(this.ifNotClick);
  }
}

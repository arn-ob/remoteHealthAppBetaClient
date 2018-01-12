import { Router } from '@angular/router';
import { AuthenticationService } from './../services/auth/authentication.service';
import { SqlpostService } from './../services/sqlpost/sqlpost.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-signup-nurse',
  templateUrl: './signup-nurse.component.html',
  styleUrls: ['./signup-nurse.component.css']
})
export class SignupNurseComponent {

  name: any;
  pass: any;
  email: any;
  msg: any;
  error = false;
  success = false;
  formVisible = true;
  checking = false;
  // Constructor Function
  constructor(
    private service: SqlpostService,
    private auth: AuthenticationService,
    private router: Router
  ) {
  }
  // onSubmit() { this.submitted = true; }
  ReqSubmit() {
    this.checking = true;
    const data = { username: this.name, password: this.pass, email: this.email };
    console.log(data);
    this.formVisible = false; // Hide the form
    this.service.postRequest('insert-nurse', data).subscribe(
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
        this.msg = 'Somthing got error please try again later';
      }
    );
  }

}

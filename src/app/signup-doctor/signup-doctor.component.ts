import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms/src/directives/default_value_accessor';
import { SqlpostService } from '../services/sqlpost/sqlpost.service';

@Component({
  selector: 'app-signup-doctor',
  templateUrl: './signup-doctor.component.html',
  styleUrls: ['./signup-doctor.component.css']
})

export class SignupDoctorComponent {
  name: any;
  pass: any;
  email: any;
  msg: any;
  error = false;
  checking = false;
  success = false;
  formVisible = true;
  // Constructor Function
  constructor(private service: SqlpostService) {
  }
  // onSubmit() { this.submitted = true; }
  ReqSubmit() {
    this.checking = true;
    const data = { username: this.name, password: this.pass, email: this.email };
    console.log(data);
    this.formVisible = false; // Hide the form
    this.service.postRequest('insert-doctor', data).subscribe(
    response => {
        this.checking = false;
        this.success = true; // Show the success message
        this.msg = 'Please Wait for Conformation';
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

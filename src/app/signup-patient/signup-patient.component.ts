import { SqlpostService } from './../services/sqlpost/sqlpost.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
  msg: any;
  error = false;
  success = false;
  formVisible = true;
  checking = false;
  // Constructor Function
  constructor(private service: SqlpostService) {
  }
  // onSubmit() { this.submitted = true; }
  ReqSubmit() {
    this.checking = true;
    const data = { username: this.name, password: this.pass, email: this.email };
    console.log(data);
    this.formVisible = false; // Hide the form
    this.service.postRequest('insert-patient', data).subscribe(
      response => {
        this.checking = false;
        this.success = true;
        this.msg = 'Please Wait for Conformation';
      },
      err => {
        this.checking = false;
        this.error = true;
        this.msg = 'Somthing got error please try again later';
      });
  }
}

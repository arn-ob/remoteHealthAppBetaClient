import { AuthenticationService } from '../services/auth/authentication.service';
import { SqlpostService } from '../services/sqlpost/sqlpost.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SigninComponent {

  // Variable Decliear
  username: any;
  password: any;
  msg: any;
  message;
  Requested = true;
  checkingReq = false;
  Server_Error = false;
  user_not_found = false;
  // Constructor Function
  constructor(
    private service: SqlpostService,
    private router: Router,
    private location: Location,
    private cookieService: CookieService,
    private authenticationService: AuthenticationService
  ) {}

  // onSubmit() { this.submitted = true; }

  // login Request Function
  loginReq() {

    this.Requested = false;
    this.checkingReq = true;
    const data = { username: this.username, password: this.password};
    console.log(data);
    this.service.postRequest('login', data).subscribe(
    response => {
      if (response.json().token === null) {
        this.Requested = true;
        this.user_not_found = true;
      }else {
        // this.success = true; // Show the success message
        this.msg = 'Please Wait for Conformation';
        console.log(response.json().token);
        this.cookieService.set('token', response.json().token);
        this.authenticationService.sign_in();
        }
      },
      err => {
      this.Server_Error = true;
      this.Requested = true;
      this.checkingReq = false;
      this.msg = 'Somthing got error please try again later';
      console.log(err);
      }
    );
  }
}

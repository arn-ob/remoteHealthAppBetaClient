import { SqlpostService } from './../services/sqlpost/sqlpost.service';
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
  username: any;
  password: any;
  msg: any;
  message;
  Requested = true;
  checkingReq = false;
  // Constructor Function
  constructor(
    private service: SqlpostService,
    private router: Router,
    private location: Location,
    private cookieService: CookieService
  ) {}
  // onSubmit() { this.submitted = true; }
  loginReq() {
    this.Requested = false;
    this.checkingReq = true;
    const data = { username: this.username, password: this.password};
    console.log(data);
    this.service.postRequest('login', data).subscribe(
    response => {
        // this.success = true; // Show the success message
        this.msg = 'Please Wait for Conformation';
        console.log(response.json().token);
        this.cookieService.set('token', response.json().token);
        // this.router.navigated = false;
        // this.router.navigate(['/']);
        // localStorage.setItem('isRefresh', 'false');
        this.cookieService.set('username', response.json().username );
        this.location.go('/');
        location.reload();
    },
    err => {
     this.Requested = true;
     this.checkingReq = false;
     this.msg = 'Somthing got error please try again later';
     console.log(err);
    }
  );
  }


}

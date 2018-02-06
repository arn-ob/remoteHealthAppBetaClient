import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/auth/authentication.service';
import { SqlpostService } from './../../services/SQL-post/sqlpost.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup-nurse',
  templateUrl: './signup-nurse.component.html',
  styleUrls: ['./signup-nurse.component.css']
})
export class SignupNurseComponent {

  name: any;
  pass: any;
  email: any;
  Repass: any;
  ifNotClick: any;
  disabled: any;

  nurse = true;
  error = false;
  success = false;
  formVisible = true;
  checking = false;

  // Constructor Function
  constructor(
    private service: SqlpostService,
    private auth: AuthenticationService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  // onSubmit() { this.submitted = true; }
  ReqSubmit() {
    if (this.disabled === true) {
      this.checking = true;
      const data = { email: this.email, password: this.pass, isnurse: this.nurse};
      console.log(data);
      this.formVisible = false; // Hide the form
      this.service.postRequest('insert-nurse', data).subscribe(
        response => {
          this.checking = false;
          this.success = true; // Show the success message
          this.cookieService.set('token', response.json().token);
          this.router.navigate(['/nurse-information']);
        },
        err => {
          // console.log('error got: ' + err);
          this.checking = false;
          this.error = true;
        }
      );
    }
  }

  i_agree($event) {
    console.log($event.explicitOriginalTarget.checked);
    this.disabled = $event.explicitOriginalTarget.checked;
    if ($event.explicitOriginalTarget.checked === true) {
      this.ifNotClick = false;
    } else {
      this.ifNotClick = true;
    }
    console.log(this.ifNotClick);
  }
}

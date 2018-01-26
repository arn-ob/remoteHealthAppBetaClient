import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/auth/authentication.service';
import { SqlpostService } from './../../services/SQL-post/sqlpost.service';
import { Component, OnInit } from '@angular/core';
import { ValidationCheckService } from '../../services/validation-check/validation-check.service';


@Component({
  selector: 'app-doctor-information',
  templateUrl: './doctor-information.component.html',
  styleUrls: ['./doctor-information.component.css']
})


export class DoctorInformationComponent implements OnInit {
  first_name: any;
  last_name: any;
  title_prefix: any;
  day: any;
  month: any;
  year: any;
  reg: any;
  con_number: any;
  em_number: any;
  regID: any;

  NotFound = false;
  checkLoginInfo = true;
  validationRequestDone = false;
  store_id;
  months: any[] = [
    'January', 'February',
    'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
  constructor(
    private service: SqlpostService,
    private validation: ValidationCheckService,
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Check the reg id from gmail send id and stored id
  check() {
    const check = this.validation.validattion_Check(this.regID);
    if (check === 'matched') {
      this.checkLoginInfo = false;
      this.validationRequestDone = true;
    } else {
      this.checkLoginInfo = true;
      this.validationRequestDone = false;
      this.NotFound = true;
    }
  }

  Request() {
    this.store_id = this.auth.give_req_id_from_token();
    const data = {
      reg_id: this.store_id,
      first_name: this.first_name,
      last_name: this.last_name,
      title_prefix: this.title_prefix,
      day: this.day,
      month: this.month,
      year: this.year,
      reg: this.reg,
      con_number: this.con_number,
      em_number: this.em_number
    };

    console.log(data);
    this.service.postRequest('insert-doctor-finalize', data).subscribe(
      response => {
        if (response.json().token === null) {
          // send a error msg
        } else {
          // this.success = true; // Show the success message
          console.log(response.json().token);
          this.auth.save_token(response.json().token);
          this.router.navigate(['/doctor-dashboard']);
        }
      },
      err => {
        console.log(err);
      });
  }
}


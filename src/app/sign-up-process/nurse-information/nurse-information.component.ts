import { ValidationCheckService } from './../../services/validation-check/validation-check.service';
import { SqlpostService } from './../../services/sqlpost/sqlpost.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nurse-information',
  templateUrl: './nurse-information.component.html',
  styleUrls: ['./nurse-information.component.css']
})
export class NurseInformationComponent implements OnInit {

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

  months: any[]= [
  'January', 'February',
  'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];
  constructor(
    private service: SqlpostService,
    private validation: ValidationCheckService
  ) { }

  ngOnInit() {
  }

  check() {
    const check = this.validation.validattion_Check(this.regID);
    if (check === 'matched') {
      this.checkLoginInfo = false;
      this.validationRequestDone = true;
    }else {
      this.checkLoginInfo = true;
      this.validationRequestDone = false;
      this.NotFound = true;
    }
  }

  Request() {

    const data = {
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

    // Service not working. Need to set it to backend
    console.log(data);
    this.service.postRequest('login', data).subscribe(
    response => {
      if (response.json().token === null) {

      }else {
        // this.success = true; // Show the success message
        console.log(response.json().token);

      }
    },
    err => {
      console.log(err);
    });
  }
}


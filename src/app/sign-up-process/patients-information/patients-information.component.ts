import { Router } from '@angular/router';
import { SqlpostService } from './../../services/SQL-post/sqlpost.service';
import { ValidationCheckService } from './../../services/validation-check/validation-check.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-patients-information',
  templateUrl: './patients-information.component.html',
  styleUrls: ['./patients-information.component.css']
})
export class PatientsInformationComponent implements OnInit {

  first_name: any;
  last_name: any;
  title_prefix: any;
  day: any;
  month: any;
  year: any;
  con_number: any;
  em_number: any;
  regID: any;

  NotFound = false;
  checkLoginInfo = true;
  validationRequestDone = false;

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

    const store_id = this.auth.give_req_id_from_token();

    const data = {
      reg_id: store_id,
      first_name: this.first_name,
      last_name: this.last_name,
      title_prefix: this.title_prefix,
      day: this.day,
      month: this.month,
      year: this.year,
      con_number: this.con_number,
      em_number: this.em_number
    };

    // Service not working. Need to set it to backend
    console.log(data);
    this.service.postRequest('insert-patients-finalize', data).subscribe(
      response => {
        if (response.json().token === null) {

        } else {
          // this.success = true; // Show the success message
          console.log(response.json().token);
          this.auth.save_token(response.json().token);
          this.router.navigate(['/patients-dashboard']);
        }
      },
      err => {
        console.log(err);
      });
  }
}

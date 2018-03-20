import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { SqlGetService } from './../../../services/SQL-get/sql-get.service';
import { SqlpostService } from './../../../services/SQL-post/sqlpost.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-doctor-patients',
  templateUrl: './assign-doctor-patients.component.html',
  styleUrls: ['./assign-doctor-patients.component.css']
})


/// Not completed

export class AssignDoctorPatientsComponent implements OnInit {
  doctor_id: any;
  patients_id: any;
  adminID: any;
  adminName: any;
  doctor_list: any[];
  patients_list: any[];

  constructor(
    private sqlpostserice: SqlpostService,
    private sqlgetservice: SqlGetService,
    private router: Router,
    private cookieService: CookieService,
  ) { }

  ngOnInit() {
    this.adminID = this.cookieService.get('user_id');
    this.adminName = this.cookieService.get('user_name');
    this.get_doctor_list();
    this.get_patients_list();
  }

  get_doctor_list() {
    this.sqlgetservice.getRequest('get-active-doctor-list').subscribe(
      response => {
          this.doctor_list = response.json().result;
      },
      err => {
        console.log(err);
      }
    );
  }

  get_patients_list() {
    this.sqlgetservice.getRequest('get-active-patients-list').subscribe(
      response => {
          this.patients_list = response.json().result;
      },
      err => {
        console.log(err);
      }
    );
  }


  assign() {
    const send_data = { doctor_id: this.doctor_id, patients_id: this.patients_id };
    this.sqlpostserice.postRequest('request-accept', send_data).subscribe(
      response => {
        console.log(response.json());
          console.log('success');
      },
      err => {
        console.log(err);
      }
    );
  }

  set_doctor_id(value) {
    this.doctor_id = value;
  }
  set_patients_id(value) {
    this.patients_id = value;
  }
}

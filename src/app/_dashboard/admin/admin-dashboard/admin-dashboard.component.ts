import { SqlGetService } from './../../../services/SQL-get/sql-get.service';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SqlpostService } from '../../../services/SQL-post/sqlpost.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {
  adminID: any;
  adminName: any;
  doctor_active_list: any[];
  patients_active_list: any[];

  constructor(
    private sqlpostserice: SqlpostService,
    private sqlgetservice: SqlGetService,
    private router: Router,
    private location: Location,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.adminID = this.cookieService.get('user_id');
    this.adminName = this.cookieService.get('user_name');
    this.get_patients_list();
    this.get_doctor_list();
  }

  get_doctor_list() {
    this.sqlgetservice.getRequest('get-active-doctor-list').subscribe(
      response => {
          this.doctor_active_list = response.json().result;
      },
      err => {
        console.log(err);
      }
    );
  }

  get_patients_list() {
    this.sqlgetservice.getRequest('get-active-patients-list').subscribe(
      response => {
          this.patients_active_list = response.json().result;
      },
      err => {
        console.log(err);
      }
    );
  }

  checkClick(value) {
    console.log(value);
  }
}

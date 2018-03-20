import { MatDialog } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { SqlGetService } from './../../../services/SQL-get/sql-get.service';
import { SqlpostService } from './../../../services/SQL-post/sqlpost.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-doctor-request',
  templateUrl: './new-doctor-request.component.html',
  styleUrls: ['./new-doctor-request.component.css']
})
export class NewDoctorRequestComponent implements OnInit {
  adminID: any;
  adminName: any;
  request_doctor_list: any[];
  Loaded = false;

  constructor(
    private sqlpostserice: SqlpostService,
    private sqlgetservice: SqlGetService,
    private router: Router,
    private cookieService: CookieService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.adminID = this.cookieService.get('user_id');
    this.adminName = this.cookieService.get('user_name');
    this.requested_doctor_list();
  }

  requested_doctor_list() {
    this.Loaded = false;
    this.sqlgetservice.getRequest('get-request-doctor-list').subscribe(
      response => {
        this.request_doctor_list = response.json().result;
        this.Loaded = true;
      },
      err => {
        console.log(err);
      }
    );
  }
  accept(value) {
    const send_data = { where: 'doctor', reg_id: value };
    this.sqlpostserice.postRequest('request-accept', send_data).subscribe(
      response => {
        console.log(response.json());
        this.openAcceptDialog();
        this.requested_doctor_list();
      },
      err => {
        console.log(err);
      }
    );
  }

  deny(value) {
    const send_data = { where: 'doctor', reg_id: value };
    this.sqlpostserice.postRequest('request-deny', send_data).subscribe(
      response => {
        console.log(response.json());
        this.openDenyDialog();
        this.requested_doctor_list();
      },
      err => {
        console.log(err);
      }
    );
  }

  openAcceptDialog(): void {
    this.dialog.open(AllowDoctorComponent, {
      width: '250px'
    });
  }

  openDenyDialog(): void {
    this.dialog.open(DenyDoctorComponent, {
      width: '250px'
    });
  }
  details(value) {
    console.log(value);
  }
}



@Component({
  selector: 'app-success',
  templateUrl: 'success.html',
})
export class AllowDoctorComponent { }

@Component({
  selector: 'app-deny',
  templateUrl: 'deny.html',
})
export class DenyDoctorComponent { }

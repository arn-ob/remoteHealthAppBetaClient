import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { SqlGetService } from './../../../services/SQL-get/sql-get.service';
import { SqlpostService } from './../../../services/SQL-post/sqlpost.service';
import { Component, OnInit, Inject, style } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { trigger, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-new-patients-request',
  templateUrl: './new-patients-request.component.html',
  styleUrls: ['./new-patients-request.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        animate(20000)
      ])
    ])
  ]
})

export class NewPatientsRequestComponent implements OnInit {
  adminID: any;
  adminName: any;
  request_patients_list: any[];
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
    this.requested_patients_list();
  }
  requested_patients_list() {
    this.Loaded = false;
    this.sqlgetservice.getRequest('get-request-patients-list').subscribe(
      response => {
        this.request_patients_list = response.json().result;
        this.Loaded = true;
      },
      err => {
        console.log(err);
      }
    );
  }
  accept(value) {
    console.log(value);
    const send_data = { where: 'patients', reg_id: value };
    this.sqlpostserice.postRequest('request-accept', send_data).subscribe(
      response => {
        console.log(response.json());
        this.requested_patients_list();
        this.openAcceptDialog();

      },
      err => {
        console.log(err);
      }
    );
  }

  deny(value) {
    const send_data = { where: 'patients', reg_id: value };
    this.sqlpostserice.postRequest('request-deny', send_data).subscribe(
      response => {
        console.log(response.json());
        this.requested_patients_list();
        this.openDenyDialog();
        // this.is_data_loaded = true;
      },
      err => {
        console.log(err);
      }
    );
  }


  details(value) {
    console.log(value);
  }

  openAcceptDialog(): void {
    this.dialog.open(AllowComponent, {
      width: '250px'
    });
  }

  openDenyDialog(): void {
    this.dialog.open(DenyComponent, {
      width: '250px'
    });
  }
}



@Component({
  selector: 'app-success',
  templateUrl: 'success.html',
})
export class AllowComponent { }

@Component({
  selector: 'app-deny',
  templateUrl: 'deny.html',
})
export class DenyComponent { }

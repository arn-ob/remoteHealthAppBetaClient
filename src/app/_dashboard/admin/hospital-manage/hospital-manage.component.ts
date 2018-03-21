import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { SqlGetService } from './../../../services/SQL-get/sql-get.service';
import { SqlpostService } from './../../../services/SQL-post/sqlpost.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-hospital-manage',
  templateUrl: './hospital-manage.component.html',
  styleUrls: ['./hospital-manage.component.css']
})
export class HospitalManageComponent implements OnInit {
  adminID: any;
  adminName: any;
  hospital_list: any[];
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
    this.get_hospital_list();
  }

  get_hospital_list() {
    this.Loaded = false;
    this.sqlgetservice.getRequest('get-hospital-list').subscribe(
      response => {
          this.hospital_list = response.json().result;
          this.Loaded = true;
      },
      err => {
        console.log(err);
      }
    );
  }

  new_hospital() {
    // Here will write new hospital Add code
    this.openDialog();
  }

  edit(value) {
    // here will write hospital edit code
  }

  delete(value) {
    // here will write hospital delete code
  }

  // Dialog Property
  openDialog(): void {
    const dialogRef = this.dialog.open(HospitallAddComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was cosed');
      this.get_hospital_list();
    });
  }
}



@Component({
  selector: 'app-hospital-add',
  templateUrl: 'hospital-add.html',
})
export class HospitallAddComponent {
  constructor(
    public dialogRef: MatDialogRef<HospitallAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

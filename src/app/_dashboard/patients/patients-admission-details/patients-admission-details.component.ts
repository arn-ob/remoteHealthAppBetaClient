import { SqlpostService } from './../../../services/SQL-post/sqlpost.service';
import { SqlGetService } from './../../../services/SQL-get/sql-get.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients-admission-details',
  templateUrl: './patients-admission-details.component.html',
  styleUrls: ['./patients-admission-details.component.css']
})
export class PatientsAdmissionDetailsComponent implements OnInit {
  user_id = 'No ID Found';
  user_name = 'No name Found';
  get_admission_ID: any;
  admission_details: any[];
  loading;
  constructor(
    private cookieService: CookieService,
    private get_req_service: SqlGetService,
    private service2: SqlpostService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.user_name = this.cookieService.get('user_name');
    this.user_id = this.cookieService.get('user_id');
    this.get_admission_ID = this.cookieService.get('navagate-to-patients-admission-details');
    this.get_admission_information2();
  }

  get_admission_information2() {
    const send_data = { reg_id: this.get_admission_ID};
    this.service2.postRequest('get-patients-and-admission-details', send_data).subscribe(
      response => {
          console.log(response.json().result[0]);
          this.admission_details = response.json().result[0];
          this.loading = false;
      },
      err => {
        console.log(err);
      }
    );
   }
}

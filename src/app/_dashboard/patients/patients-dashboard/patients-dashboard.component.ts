import { Router } from '@angular/router';
import { SqlGetService } from './../../../services/SQL-get/sql-get.service';
import { SqlpostService } from './../../../services/SQL-post/sqlpost.service';
import { Subscription } from 'rxjs/Subscription';
import { RequestPatientsDataService } from './../patients-service/request-patients-data.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-patients-dashboard',
  templateUrl: './patients-dashboard.component.html',
  styleUrls: ['./patients-dashboard.component.css']
})

export class PatientsDashboardComponent implements OnInit {
  // content view
  system_part= false;
  loading = true;

  // Store checkup details which came from database
  admission_list = [];

  constructor(
    private cookieService: CookieService,
    private patientsService: RequestPatientsDataService,
    private service: SqlpostService,
    private get_req_service: SqlGetService,
    private router: Router
  ) { }

  user_id = 'No ID Found';
  user_name = 'No name Found';


  ngOnInit() {
    this.request_patients_admission_list();
    this.user_id = this.cookieService.get('user_id');
    this.user_name = this.cookieService.get('user_name');
  }


  request_patients_admission_list() {
    this.user_id = this.cookieService.get('user_id');
    const send_data = { reg_id: this.user_id};
    this.service.postRequest('send-checkup-details', send_data).subscribe(
      response => {
          // console.log(response.json());
          this.admission_list = response.json().result;
      },
      err => {
        console.log(err);
      }
    );
   }

   //
  Admission_request() {
     this.router.navigate(['/patients-admission-request']);
  }

  set_go(value) {
    console.log(value);
  }
}

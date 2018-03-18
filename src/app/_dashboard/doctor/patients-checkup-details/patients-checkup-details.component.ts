import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { SqlpostService } from '../../../services/SQL-post/sqlpost.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-patients-checkup-details',
  templateUrl: './patients-checkup-details.component.html',
  styleUrls: ['./patients-checkup-details.component.css']
})
export class PatientsCheckupDetailsComponent implements OnInit {

  doctorName = 'Not Found';
  doctorID = 'Not Found';
  get_check_ID;
  checkup_details: any[];
  chart = [];

  ecg_data_set5 = [];
  ecg_data_set = [];
  ecg_data_set2 = [0, 254, 158, 0, 33, 2, 170, 0, 77, 2, 0, 127, 146, 158, 153, 137, 127, 132, 149, 161, 156, 140, 129, 135, 153];
  ecg_data_set3 = [0, 254, 158, 0, 69, 2, 170, 0, 77, 2, 0, 165, 161, 148, 139, 141, 151, 158, 154, 142, 135, 139, 151, 158, 155];
  is_data_loaded = false;
  constructor(
    private service: SqlpostService,
    private cookieservice: CookieService
  ) { }

  // -------------------------------------
   chartOptions = {
    responsive: true
  };
   chartData = [
    { data: this.ecg_data_set2, label: 'ECG', fill: false }
  ];
   chartLabels = this.ecg_data_set2;


  // --------------------------------------------


  ngOnInit() {
    this.get_check_ID = this.cookieservice.get('navagate_to_checkup_details');
    this.doctorID = this.cookieservice.get('user_id');
    this.doctorName = this.cookieservice.get('user_name');
    this.get_this_checkup_details();
    this.is_data_loaded = true;
    console.log(this.ecg_data_set);
  }

  get_this_checkup_details() {
    const send_data = { reg_id: this.get_check_ID };
    this.service.postRequest('get-patients-checkup-info', send_data).subscribe(
      response => {
        console.log(response.json().result[0]);
        this.checkup_details = response.json().result[0];
        this.ecg_data_set = response.json().result[0].data;
        this.is_data_loaded = true;
        console.log(this.ecg_data_set);
        this.ecg_data_view();
        // this.ecg_data_view();
      },
      err => {
        console.log(err);
      }
    );
  }


  ecg_data_view() {
    this.ecg_data_set5 = this.ecg_data_set;
    return true;
  }
}

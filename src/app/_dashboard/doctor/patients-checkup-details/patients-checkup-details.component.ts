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

  ecg_data_set = [0,254,158,0,21,2,170,0,77,2,0,157,157,162,167,169,165,161,161,165,171,172,167,161,159,163,166,166,159,152,150,152,154,153,147,140,137,139,144,144,141,136,135,139,143,144,141,136,135,140,145,146,142,13];
  ecg_data_set2 = [0,254,158,0,33,2,170,0,77,2,0,127,146,158,153,137,127,132,149,161,156,140,129,135,153,163,156,138,125,130,146,156,149,131,121,127,143,153,146,128,117,124,142,154,148,132,122,127,140,145,134,118,112,12];
  ecg_data_set3 = [0,254,158,0,69,2,170,0,77,2,0,165,161,148,139,141,151,158,154,142,135,139,151,158,155,144,137,141,152,160,156,145,138,142,153,161,156,146,139,143,155,162,158,147,141,146,157,165,161,149,143,148,160,16];
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
    { data: this.ecg_data_set , label: 'ECG', fill: false }
  ];
   chartLabels = this.ecg_data_set;


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
        // this.ecg_data_view();
      },
      err => {
        console.log(err);
      }
    );
  }


  ecg_data_view() {
    //   this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
    //     type: 'line',
    //     data: {data: this.ecg_data_set},
    //     options: {
    //       legend: {
    //         display: false
    //       },
    //       scales: {
    //         xAxes: [{
    //           display: true
    //         }],
    //         yAxes: [{
    //           display: true
    //         }],
    //       }
    //     }
    //   });
  }
}

import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { ChartModule } from 'angular2-chartjs';
import { EcgDataProcessingService } from './../doctor-service/ecg-data-processing.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, SimpleChange } from '@angular/core';
import { SqlpostService } from '../../../services/SQL-post/sqlpost.service';



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

  type;
  // tslint:disable-next-line:max-line-length
  datas = [0, 0, 0, 0];
  data;
  options;
  countD = 51000;
  count = 1;
  check = false;
  show_ecg = [];
  last_count = 0;
  qrs_number;
  subscription: Subscription;
  /// Var for ecg
  is_data_loaded = false;
  constructor(
    private service: SqlpostService,
    private cookieservice: CookieService,
    private ecg: EcgDataProcessingService
  ) {
     setInterval(() => { this.get_ecg_data();
      this.drawGraphn();
  },  60 * 80);
  }



  ngOnInit() {
    this.get_check_ID = this.cookieservice.get('navagate_to_checkup_details');
    this.doctorID = this.cookieservice.get('user_id');
    this.doctorName = this.cookieservice.get('user_name');
    this.get_this_checkup_details();
    this.chartFunc();

  }


  get_this_checkup_details() {
    const send_data = { reg_id: this.get_check_ID };
    this.service.postRequest('get-patients-checkup-info', send_data).subscribe(
      response => {
        this.checkup_details = response.json().result[0];
        // this.ecg_data_set = response.json().result[0].data;
        // this.is_data_loaded = true;
        // console.log(this.ecg_data_set);
        // this.ecg_data_view();
        // this.ecg_data_view();
        this.is_data_loaded = true;
      },
      err => {
        console.log(err);
      }
    );
}


  get_ecg_data() {
    const send_data = { checkup_id: this.get_check_ID, seq: this.countD };
    this.subscription = this.service.postRequest('ecg-data-sending', send_data).subscribe(
      response => {
        const results = [];
        const store = response.json().result[0].ecg_data;
        const array = store.split(',').map(function (n) {
          return Number(n);
        });
        for (let i = 0; i < array.length; i++) {
          this.datas.push(array[i]);
        }
        this.countD++;
        this.chartFunc();
      },
      err => {
        console.log(err);
      }
    );
  }

  chartFunc() {
    this.last_count = this.count;
    const qrs_data = [];
    const ecg_data = [];
    const show_ecg_temp = [];
    const temp = [];
    for (let i = 0; i < this.datas.length; i++) {

      temp.push(this.datas[i]);
      for (let j = 0; j < temp.length; j++) {
        ecg_data.push(temp[j]);
        if (i === 0) {
          qrs_data.push(temp[j]);
        }
      }
    }


    if (this.qrs_number === 0) {
      this.ecg.init(qrs_data);
      this.qrs_number++;
    } else {
      this.ecg.update(qrs_data);
      this.qrs_number = this.ecg.QRS();
    }

    // for ecg data limit
    for (let k = 0; k < 700; k++) {
      show_ecg_temp.push(ecg_data[k]);
    }
    this.datas = [];
    this.show_ecg = show_ecg_temp;

  }

  drawGraphn() {
    this.type = 'line';
    this.data = {
      labels: this.show_ecg,
      datasets: [
        {
          label: this.qrs_number + ' ' + 'pm' + ' ' + 'Seq' + ' ' + this.countD,
          data: this.show_ecg,
          fill: false,
        }
      ]
    };
    this.options = {
      responsive: true,
      display: true,
      elements: { point: { radius: 0 } },
      scales: {
        yAxes: [{
          ticks: {
            suggestedMin: -100,
            suggestedMax: 300
          }
        }],
        xAxes: [{
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100
          }
        }]
      },
    };
  }

  OnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
      console.log('Unsubscribe For login subscription');
    }
  }
}

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
  datas = [156, 119, 110, 137, 174, 184, 158, 122, 112, 139, 177, 187, 161, 126, 116, 143, 181, 191, 166, 129, 120, 147, 184, 195, 169, 133, 123, 150, 188, 198, 172, 136, 126, 153, 190, 200, 174, 137, 128, 153, 188, 197, 169, 131, 119, 144, 178, 186, 158, 120, 109, 134, 169, 179, 151, 114, 103, 129, 166, 175, 149, 112, 101, 128, 165, 175, 149, 112, 102, 128, 165, 175];
  data;
  options;
  countD = 1;
  count = 1;
  check = false;
  show_ecg = [];
  last_count = 0;
  /// Var for ecg
  is_data_loaded = false;
  constructor(
    private service: SqlpostService,
    private cookieservice: CookieService,
    private ecg: EcgDataProcessingService
  ) {
     setInterval(() => { this.get_ecg_data();
      this.drawGraphn(); },  60 * 60);
  }



  ngOnInit() {
    this.get_check_ID = this.cookieservice.get('navagate_to_checkup_details');
    this.doctorID = this.cookieservice.get('user_id');
    this.doctorName = this.cookieservice.get('user_name');
    this.get_this_checkup_details();
    this.chartFunc();
    this.drawGraphn();
  }


  get_this_checkup_details() {
    const send_data = { reg_id: this.get_check_ID };
    this.service.postRequest('get-patients-checkup-info', send_data).subscribe(
      response => {
        console.log(response.json().result[0]);
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
    const send_data = { id: this.countD };
    this.service.postRequest('prev-ecg-data-sending', send_data).subscribe(
      response => {
        const results = [];
        const store = response.json().result[0].data;

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
      console.log('test 1');
      for (let j = 0; j < temp.length; j++) {
        ecg_data.push(temp[j]);
        if (i === 0) {
          qrs_data.push(temp[j]);
        }
      }
    }

    // //if (!this.ecg.qrs) {
    // if (!this.check) {
    //   this.ecg.init(qrs_data);
    //   this.check = true;
    //   // +this.ecg.qrs = true;
    // } else {
    //   this.ecg.update(qrs_data);
    //   console.log("else statement");
    //   console.log(this.ecg.QRS());
    //   this.datas.push(this.ecg.QRS());
    //   console.log(ecg_data);
    // }

    // for ecg data limit
    for (let k = 0; k < 700; k++) {
      show_ecg_temp.push(ecg_data[k]);


    }
    // console.log('Data To View');
    // console.log(show_ecg);
    // console.log('-----------------');
    // console.log(this.datas);
    this.datas = [];
    // console.log('After Slice');
    // console.log(this.datas);
    this.show_ecg = show_ecg_temp;

  }

  drawGraphn() {
    this.type = 'line';
    this.data = {
      labels: this.show_ecg,
      datasets: [
        {
          label: 'hy',
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

}

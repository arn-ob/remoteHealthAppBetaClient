import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
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
  constructor(
    private service: SqlpostService,
    private cookieservice: CookieService
  ) { }

  ngOnInit() {
    this.get_check_ID = this.cookieservice.get('navagate_to_checkup_details');
    this.doctorID = this.cookieservice.get('user_id');
    this.doctorName = this.cookieservice.get('user_name');
  }

  get_this_checkup_details() {
    const send_data = { reg_id: this.get_check_ID};
    this.service.postRequest('get-patients-and-this-checkup-details', send_data).subscribe(
      response => {
          // console.log(response.json().result[0]);
          this.checkup_details = response.json().result[0];
      },
      err => {
        console.log(err);
      }
    );
   }
}

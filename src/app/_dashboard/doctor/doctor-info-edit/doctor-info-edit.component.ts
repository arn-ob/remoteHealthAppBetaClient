import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SqlpostService } from './../../../services/SQL-post/sqlpost.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-info-edit',
  templateUrl: './doctor-info-edit.component.html',
  styleUrls: ['./doctor-info-edit.component.css']
})
export class DoctorInfoEditComponent implements OnInit {
  first_name: any;
  last_name: any;
  req_no: any;
  user_name: any;
  created_date: any;
  date_of_birth: any;
  other_text: any;

  doctorName = 'Not Found';
  doctorID = 'Not Found';
  doctor_details: any[];
  is_data_loaded = false;
  submit= false;
  constructor(
    private cookieservice: CookieService,
    private service: SqlpostService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.doctorID = this.cookieservice.get('user_id');
    this.doctorName = this.cookieservice.get('user_name');
    this.get_doctor_information();
  }

  get_doctor_information() {
    const send_data = { reg_id: this.doctorID };
    this.service.postRequest('get-doctor-details', send_data).subscribe(
      response => {
        console.log(response.json().result[0]);
        this.doctor_details = response.json().result[0];
        this.is_data_loaded = true;
        console.log(this.doctor_details);
      },
      err => {
        console.log(err);
      }
    );
  }

  post_doctor_information() {
    const send_data = {
      reg_id: this.doctorID,
      first_name: this.first_name,
      last_name: this.last_name,
      req_no: this.req_no,
      user_name: this.user_name,
      date_of_birth: this.date_of_birth,
      other_text: this.other_text
    };
    this.service.postRequest('update-doctor-details', send_data).subscribe(
      response => {
        console.log(response.json().result);
        console.log(this.doctor_details);
        this.is_data_loaded = false;
        this.submit = true;
        this.get_doctor_information();
      },
      err => {
        console.log(err);
      }
    );
  }
}

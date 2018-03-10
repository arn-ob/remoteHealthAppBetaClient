import { SqlpostService } from './../../../services/SQL-post/sqlpost.service';
import { SqlGetService } from './../../../services/SQL-get/sql-get.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients-request',
  templateUrl: './patients-request.component.html',
  styleUrls: ['./patients-request.component.css']
})
export class PatientsRequestComponent implements OnInit {

  // Store variable from html
  hospitalName: any;
  doctorName: any;
  nurseName: any;


  // View component
  success = true;
  Request = true;


  constructor (
    private cookieService: CookieService,
    private Get_Service: SqlGetService,
    private service: SqlpostService
  ) { }

  // list for view data
  hospital_list = [];
  doctor_list = [];
  nurse_list = [];

  user_id = 'No ID Found';
  user_name = 'No name Found';

  ngOnInit() {
    // Getting array from database
    this.get_hospital_list();

    // Get data from cookie
    this.Request = true;
    this.success = false;

    this.user_id = this.cookieService.get('user_id');
    this.user_name = this.cookieService.get('user_name');
  }

  // Get the hospital list form db
  get_hospital_list() {
    this.Get_Service.getRequest('send-hospital-list').subscribe(
      response => {
          // console.log(response.json());
          this.hospital_list = response.json().result;
      },
      err => {
        console.log(err);
      }
    );
   }


   // Get the doctor List from db
   get_doctor_list() {
    this.Get_Service.getRequest('send-doctor-list').subscribe(
      response => {
          // console.log(response.json());
          this.doctor_list = response.json().result;
      },
      err => {
        console.log(err);
      }
    );
   }

   // Get the nurse list from db
   get_nurse_list() {
    this.Get_Service.getRequest('send-nurse-list').subscribe(
      response => {
          // console.log(response.json());
          this.nurse_list = response.json().result;
      },
      err => {
        console.log(err);
      }
    );
   }


   // Get Select value from html Component

   set_hospital_name(value) {
    this.hospitalName = value;
    this.get_doctor_list();
   }

   set_doctor_name(value) {
    this.doctorName = value;
    this.get_nurse_list();
   }

   set_nurse_name(value) {
    this.nurseName = value;
    this.check();
   }

   // Submit data to server
   submit() {
    const data = {  hospitalID: this.hospitalName,
                    doctorID: this.doctorName,
                    nurseID: this.nurseName,
                    patientsID : this.user_id
                  };

    // console.log(data);

    this.service.postRequest('send-new-admission-request', data).subscribe(
      response => {
        if (response.json().token === null) {
          console.log('Error');
        } else {
            this.Request = false;
            console.log(response.json());
            this.success = true;
        }
      },
      err => {

        console.log(err);
      }
    );
   }

   checkValue(value) {
    console.log(value);
   }
   check() {
     console.log(this.hospitalName);
     console.log(this.doctorName);
     console.log(this.nurseName);
   }
}

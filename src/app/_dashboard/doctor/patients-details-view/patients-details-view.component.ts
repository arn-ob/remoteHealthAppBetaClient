import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { SqlpostService } from '../../../services/SQL-post/sqlpost.service';

@Component({
  selector: 'app-patients-details-view',
  templateUrl: './patients-details-view.component.html',
  styleUrls: ['./patients-details-view.component.css']
})
export class PatientsDetailsViewComponent implements OnInit {

  // This will show all the info about Checkup based on checkup ID
  get_admission_ID: any;
  doctorName = 'Not Found';
  doctorID = 'Not Found';
  is_Receive_data = false;
  loading = true;
  patients_details: any[];
  patients_Checkup_details: any[];

  constructor(
    private cookieservice: CookieService,
    private service: SqlpostService,
    private router: Router
  ) { }

  ngOnInit() {

    this.doctorID = this.cookieservice.get('user_id');
    this.doctorName = this.cookieservice.get('user_name');
    this.get_admission_ID = this.cookieservice.get('navagate_to_patients');
    // this.cookieservice.delete('navagate_to_patients');
    this.get_admission_information();

  }

  get_admission_information() {
    const send_data = { reg_id: this.get_admission_ID};
    this.service.postRequest('get-patients-and-admission-details', send_data).subscribe(
      response => {
          // console.log(response.json().result[0]);
          this.patients_details = response.json().result[0];
          this.get_checkup_details();
      },
      err => {
        console.log(err);
      }
    );
   }

   get_checkup_details() {
    const send_data = { reg_id: this.get_admission_ID};
    this.service.postRequest('get-patients-and-checkup-details', send_data).subscribe(
      response => {
          // console.log(response.json().result[0]);
          this.patients_Checkup_details = response.json().result;

          // data Preloading
          this.loading = false;
          this.is_Receive_data = true;
      },
      err => {
        console.log(err);
      }
    );
   }


   go_to_checkup_details(value) {
    this.cookieservice.set('navagate_to_checkup_details', value);
    this.router.navigate(['/patients-checkup-details']);
   }
}

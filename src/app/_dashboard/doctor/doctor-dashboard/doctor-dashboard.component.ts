import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { SqlpostService } from '../../../services/SQL-post/sqlpost.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  doctorName = 'Not Found';
  doctorID = 'Not Found';

  patients_list: any[];

  constructor(
    private cookieService: CookieService,
    private service: SqlpostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.doctorID = this.cookieService.get('user_id');
    this.doctorName = this.cookieService.get('user_name');
    this. request_patients_list_to_assign_this_doctor();
  }

  request_patients_list_to_assign_this_doctor() {
    this.doctorID = this.cookieService.get('user_id');
    const send_data = { reg_id: this.doctorID};
    this.service.postRequest('get-patients-list-this-doctor', send_data).subscribe(
      response => {
          // console.log(response.json());
          this.patients_list = response.json().result;
      },
      err => {
        console.log(err);
      }
    );
   }

   goto_doctor_edit() {
      this.router.navigate(['/doctor-info-edit']);
   }

   goto_patients_details(value) {
    this.cookieService.set('navagate_to_patients', value);
    this.router.navigate(['/patients-details-view']);
   }
}

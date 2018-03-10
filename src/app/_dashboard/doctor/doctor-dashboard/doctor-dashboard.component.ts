import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  doctorName = 'Not Found';
  doctorID = 'Not Found';
  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.doctorID = this.cookieService.get('user_id');
    this.doctorName = this.cookieService.get('user_name');
  }

  // Working In progress
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-information',
  templateUrl: './doctor-information.component.html',
  styleUrls: ['./doctor-information.component.css']
})
export class DoctorInformationComponent implements OnInit {
  username: any;
  months: any[]= [
  'January', 'February',
  'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];
  constructor() { }

  ngOnInit() {
  }

  check() {
    console.log(this.username);
  }

  Request() {

  }
}

import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Http } from '@angular/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  token: any;
  username: any;
  msg;
  //
  constructor(
    private location: Location,
    private http: Http,
    private cookieService: CookieService
  ) { }
  //
  ngOnInit() {
    // Show data when start Page
    this.token = this.cookieService.get('token');
    this.username = this.cookieService.get('username');

    // this.http.get('http://localhost:5000/doctor-list').subscribe(
    //   response => {
    //       // this.success = true; // Show the success message
    //      console.log(response.json().token);
    //   },
    //   err => {
    //    this.msg = 'Somthing got error please try again later';
    //   }
    // );


    // const refresh = localStorage.getItem('isRefresh');
    // if (refresh === 'false') {
    //   this.location.go('/');
    //   location.reload();
    //   localStorage.setItem('isRefresh', 'true');
    // }

  }

}

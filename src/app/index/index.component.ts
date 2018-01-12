import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from '../services/auth/authentication.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  constructor(
    private location: Location,
    private cookieService: CookieService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // Show data when start Page
    }

}

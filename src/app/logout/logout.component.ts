import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {

  constructor(private router: Router,
    private location: Location,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/');
  }

}

import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sign = false;
  logout = true;
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    const isTokenSet = this.cookieService.get('token');
    if (isTokenSet) {
      this.sign = true;
      this.logout = false;
    }
  }

}

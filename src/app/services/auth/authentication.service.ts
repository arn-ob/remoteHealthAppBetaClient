import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {

  constructor(
    private cookieService: CookieService,
    private jwtHelper: JwtHelper,
    private location: Location,
    private router: Router
  ) { }

  logout() {
    this.cookieService.delete('token');
    this.cookieService.deleteAll();
  }

  sign_in() {
    const jwtHelper = new JwtHelper();
    const token = this.cookieService.get('token');
    const a = jwtHelper.decodeToken(token);
    console.log('Token');
    console.log(a);
    this.router.navigate(['/']);
  }

  sign_in_validation() {
    const jwtHelper = new JwtHelper();
    const token = this.cookieService.get('token');

    if (!token) {
      return false;
    }else {
      const a = jwtHelper.isTokenExpired(token);
      console.log(a);
      return true;
    }
  }


}

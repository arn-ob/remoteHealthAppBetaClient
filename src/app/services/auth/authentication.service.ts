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

  // Delete token
  logout() {
    this.cookieService.delete('token');
    this.cookieService.deleteAll();
  }

  // After sign-in page. From a valid process then nav to home page
  sign_in() {
    const jwtHelper = new JwtHelper();
    const token = this.cookieService.get('token');
    const a = jwtHelper.decodeToken(token);
    console.log('Token');
    console.log(a);
    this.router.navigate(['/']);
  }

  // Get token from cookie and check that validation
  sign_in_validation() {
    const jwtHelper = new JwtHelper();
    const token = this.cookieService.get('token');

    if (!token) {
      return false;
    }else {
      const a = jwtHelper.isTokenExpired(token);
      // console.log(a);
      return true;
    }
  }

  // 1st sign-up process was done. Navegate to nxt signup process
  just_signup(res) {
    this.cookieService.set('token', res);
  }


}

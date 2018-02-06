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
    // const jwtHelper = new JwtHelper();
    // const token = this.cookieService.get('token');
    // const a = jwtHelper.decodeToken(token);
    // console.log('Token');
    // console.log(a.token.reg_id);
    this.router.navigate(['/select-role']);
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

  // Decode token for getting token data
  give_decode_token() {
    const jwtHelper = new JwtHelper();
    const token = this.cookieService.get('token');
    const decoded_token = jwtHelper.decodeToken(token);
    console.log(' Log from give_decode_token() : ');
    console.log(decoded_token.token);
    return decoded_token.token;
  }

  // for return reg_id from token
  give_req_id_from_token() {
    const jwtHelper = new JwtHelper();
    const token = this.cookieService.get('token');
    const decoded_token = jwtHelper.decodeToken(token);
    console.log(decoded_token.reg_id);
    return decoded_token.reg_id;
  }

  give_req_id_from_token_for_role_update() {
    const jwtHelper = new JwtHelper();
    const token = this.cookieService.get('token');
    const decoded_token = jwtHelper.decodeToken(token);
    console.log(decoded_token.reg_id);
    return decoded_token;
  }

  // save token and delete the existing one
  save_token(res) {
    this.cookieService.deleteAll();
    this.cookieService.set('token', res);
  }

}

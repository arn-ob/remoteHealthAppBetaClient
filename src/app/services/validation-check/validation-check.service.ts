import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';


@Injectable()
export class ValidationCheckService {

  constructor(
    private cookieService: CookieService,
    private jwtHelper: JwtHelper
  ) { }

  validattion_Check(givenID) {
    const token = this.cookieService.get('token');
    const decodeToken = this.jwtHelper.decodeToken(token);
    // console.log(decodeToken.signup_id);
    if (decodeToken.signup_id === givenID) {
      return 'matched';
    }else {
      return 'Not_matched';
    }

  }

}

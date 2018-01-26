import { AuthenticationService } from './../auth/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RoleSelectService {

  constructor(
    private auth: AuthenticationService
  ) { }

  isAdmin() {
    const get_token = this.auth.give_decode_token();
    if (get_token.token.is_admin === 'true') {
      return true;
    }else {
      return false;
    }
  }

  isDoctor() {
    const get_token = this.auth.give_decode_token();
    // console.log(get_token);
    if (get_token.token.is_doctor === 'true') {
      return true;
    }else {
      return false;
    }
  }

  isNurse() {
    const get_token = this.auth.give_decode_token();
    if (get_token.token.is_nurse === 'true') {
     return true;
    }else {
      return false;
    }
  }

  isPatients() {
    const get_token = this.auth.give_decode_token();
    if (get_token.token.is_patients === 'true') {
      return true;
    }else {
      return false;
    }
  }

  isAllTrue() {
    let count = 0;
    if (this.isDoctor()) {
      count++;
    }
    if (this.isNurse()) {
      count++;
    }
    if (this.isPatients()) {
      count++;
    }
    console.log(count);
    if (count === 3) {
      return true;
    } else {
      return false;
    }

  }
}

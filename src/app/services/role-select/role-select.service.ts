import { AuthenticationService } from './../auth/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RoleSelectService {

  constructor(
    private auth: AuthenticationService
  ) { }

  isAdmin() {
    const get_token = this.auth.give_decode_token();
    if (get_token.is_admin === 'true') {
      // this.auth.give_role_type('admin');
      return true;
    }else {
      return false;
    }
  }

  isDoctor() {
    const get_token = this.auth.give_decode_token();
    // console.log(get_token);
    if (get_token.is_doctor === 'true') {
     //  this.auth.give_role_type('doctor');
      return true;
    }else {
      return false;
    }
  }

  isNurse() {
    const get_token = this.auth.give_decode_token();
    if (get_token.is_nurse === 'true') {
      // this.auth.give_role_type('nurse');
     return true;
    }else {
      return false;
    }
  }

  isPatients() {
    const get_token = this.auth.give_decode_token();
    if (get_token.is_patients === 'true') {
      // this.auth.give_role_type('patients');
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
    // console.log(count);
    if (count === 3) {
      return true;
    } else {
      return false;
    }

  }
}

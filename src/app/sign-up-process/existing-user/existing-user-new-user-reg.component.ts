import { AuthenticationService } from './../../services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';
import { RoleSelectService } from '../../services/role-select/role-select.service';

@Component({
  selector: 'app-existing-user-new-user-reg',
  templateUrl: './existing-user-new-user-reg.component.html',
  styleUrls: ['./existing-user-new-user-reg.component.css']
})
export class ExistingUserNewUserRegComponent implements OnInit {

  roles: any;
  first_name: any;
  last_name: any;
  title_prefix: any;
  day: any;
  month: any;
  year: any;
  reg: any;
  con_number: any;
  em_number: any;
  regID: any;
  roless: any[];

  months: any[]= [
    'January', 'February',
    'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];

  event_data: any;
  show = true;
  selectRole = false;
  isPatients = false;

  constructor(
    private role: RoleSelectService
  ) { }

  ngOnInit() {
  }
  active($event) {
    console.log($event.explicitOriginalTarget.value);
    if ($event.explicitOriginalTarget.checked === true) {
      this.get_data_from_event($event.explicitOriginalTarget.value);
      this.show = false;
      this.selectRole = true;
      if (this.event_data === 'patients') {
        this.isPatients = true;
      }
    }
  }

  get_data_from_event(data) {
    this.event_data = data;
  }

  Request() {
    console.log(this.event_data);
  }
}

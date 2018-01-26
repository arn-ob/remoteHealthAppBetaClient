import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { ValidationCheckService } from './../../services/validation-check/validation-check.service';
import { SqlpostService } from './../../services/SQL-post/sqlpost.service';
import { AuthenticationService } from './../../services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';
import { RoleSelectService } from '../../services/role-select/role-select.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-existing-user-new-user-reg',
  templateUrl: './existing-user-new-user-reg.component.html',
  styleUrls: ['./existing-user-new-user-reg.component.css']
})
export class ExistingUserNewUserRegComponent implements OnDestroy {

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

  months: any[] = [
    'January', 'February',
    'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];


  selected_role: any;
  show = true;
  selectRole = false;
  isPatients = false;

  subscription: Subscription;

  constructor(
    private role: RoleSelectService,
    private service: SqlpostService,
    private validation: ValidationCheckService,
    private auth: AuthenticationService,
    private router: Router
  ) { }

  active($event) {
    console.log($event.explicitOriginalTarget.value);
    if ($event.explicitOriginalTarget.checked === true) {
      this.get_data_from_event($event.explicitOriginalTarget.value);
      this.show = false;
      this.selectRole = true;
      if (this.selected_role === 'patients') {
        this.isPatients = true;
      }
    }
  }

  get_data_from_event(data) {
    this.selected_role = data;
  }

  Request() {
    const store_id = this.auth.give_req_id_from_token();
    console.log(store_id);

    if (this.selected_role === 'patients') {

      const data = {
      reg_id: store_id,
      first_name: this.first_name,
      last_name: this.last_name,
      title_prefix: this.title_prefix,
      day: this.day,
      month: this.month,
      year: this.year,
      con_number: this.con_number,
      em_number: this.em_number
    };

    // Service not working. Need to set it to backend
    console.log(data);
    this.service.postRequest('existing-patients', data).subscribe(
      response => {
        if (response.json().token === null) {

        } else {
          // this.success = true; // Show the success message
          console.log(response.json().token);
          this.auth.save_token(response.json().token);
          this.router.navigate(['/patients-dashboard']);
        }
      },
      err => {
        console.log(err);
      });

    } else {

      const data_new = {
        role: this.selected_role,
        reg_id: store_id,
        first_name: this.first_name,
        last_name: this.last_name,
        title_prefix: this.title_prefix,
        day: this.day,
        month: this.month,
        year: this.year,
        reg: this.reg,
        con_number: this.con_number,
        em_number: this.em_number
      };

      console.log(data_new);
      this.subscription = this.service.postRequest('existing-doctor-nurse', data_new).subscribe(
        response => {
          if (response.json().token === null) {
            // send a error msg
          } else {
            // this.success = true; // Show the success message
            console.log(response.json().token);
            this.auth.save_token(response.json().token);

            if  (this.selected_role === 'doctor') {
              this.router.navigate(['/doctor-dashboard']);
            }

            if  (this.selected_role === 'nurse') {
              this.router.navigate(['/nurse-dashboard']);
            }
          }
        },
        err => {
          console.log(err);
        });
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // console.log(this.seleced_role);
}


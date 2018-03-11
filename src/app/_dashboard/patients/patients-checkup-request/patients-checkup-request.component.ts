import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { SqlpostService } from '../../../services/SQL-post/sqlpost.service';

@Component({
  selector: 'app-patients-checkup-request',
  templateUrl: './patients-checkup-request.component.html',
  styleUrls: ['./patients-checkup-request.component.css']
})
export class PatientsCheckupRequestComponent implements OnInit {

  user_id = 'No ID Found';
  user_name = 'No name Found';
  admission_id = 'No Id found';

  checkupName;
  // View component
  success = true;
  Request = true;
  constructor(
    private cookieService: CookieService,
    private service: SqlpostService
  ) { }

  ngOnInit() {
    this.Request = true;
    this.success = false;
    this.admission_id = this.cookieService.get('navagate-to-patients-checkup');
    this.user_id = this.cookieService.get('user_id');
    this.user_name = this.cookieService.get('user_name');
  }

  set_checkup(value) {
    this.checkupName = value;
   }

   submit() {
    const data = {  checkupName: this.checkupName,
                    admissionId: this.admission_id
                  };

    // console.log(data);

    this.service.postRequest('send-new-checkup-request', data).subscribe(
      response => {
        if (response.json().token === null) {
          console.log('Error');
        } else {
            this.Request = false;
             console.log(response.json());
            this.success = true;
        }
      },
      err => {

        console.log(err);
      }
    );
   }
}

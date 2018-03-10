import { Subscription } from 'rxjs/Subscription';
import { SqlpostService } from './../../../services/SQL-post/sqlpost.service';
import { Injectable } from '@angular/core';
import { SqlGetService } from '../../../services/SQL-get/sql-get.service';


@Injectable()
export class RequestPatientsDataService {

  results: any[];
  user_id: any[];

  constructor(
    private Get_Service: SqlGetService
  ) {}

  request_patients_checkup_list() {
    this.Get_Service.getRequest('send-patients-list').toPromise().then(
      response => {
          // console.log(response.json());
          this.results = response.json().result;
      },
      err => {
        console.log(err);
      }
    );
   }


}

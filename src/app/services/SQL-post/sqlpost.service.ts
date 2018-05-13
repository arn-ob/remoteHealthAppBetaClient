import { SelectdbService } from './../selectdb/selectdb.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SqlpostService {

  constructor(
    private http: Http,
    private db: SelectdbService
  ) { }

  // Linkext= Extandation of the request Link
  // data= Send request Data
  postRequest(Linkext, data) {
    return this.http.post(this.db.select_db + Linkext, data);
  }

}

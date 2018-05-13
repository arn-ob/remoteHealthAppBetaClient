import { SelectdbService } from './../selectdb/selectdb.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SqlGetService {

  constructor(
    private http: Http,
    private db: SelectdbService
  ) { }

  // Linkext= Extandation of the request Link
  getRequest(Linkext) {
    return this.http.get(this.db.select_db + Linkext);

  }


}

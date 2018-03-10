import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SqlGetService {

  private Posturl = 'http://localhost:5000/';     // Local Requset
  // private Posturl = 'http://remotehealth.azurewebsites.net/';  // Cloud Requset


  constructor(private http: Http) { }

  // Linkext= Extandation of the request Link
  getRequest(Linkext) {
    return this.http.get(this.Posturl + Linkext);

  }


}

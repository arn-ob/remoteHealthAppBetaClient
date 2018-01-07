import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SqlpostService {

   private Posturl = 'http://localhost:5000/';     // Local Requset
  // private Posturl = 'http://remotehealth.azurewebsites.net/';  // Cloud Requset


  constructor(private http: Http) { }

  // Linkext= Extandation of the request Link
  // data= Send request Data
  postRequest(Linkext, data) {
    return  this.http.post(this.Posturl + Linkext, data);

  }

}

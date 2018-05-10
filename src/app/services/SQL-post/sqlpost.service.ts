import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SqlpostService {

  private Posturl = 'http://localhost:5000/';     // Local Requset
  private Posturl_aws = 'http://healthappserver.us-east-2.elasticbeanstalk.com/';  // Cloud Requset



  constructor(private http: Http) { }

  // Linkext= Extandation of the request Link
  // data= Send request Data
  postRequest(Linkext, data) {
    // return this.http.post(this.Posturl_aws + Linkext, data);
    return this.http.post(this.Posturl + Linkext, data);
  }

}

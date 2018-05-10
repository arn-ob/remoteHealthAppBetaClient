import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SqlGetService {

  private Posturl = 'http://localhost:5000/';     // Local Requset
  private Posturl_aws = 'http://healthappserver.us-east-2.elasticbeanstalk.com/';  // Cloud Requset


  constructor(private http: Http) { }

  // Linkext= Extandation of the request Link
  getRequest(Linkext) {
    // return this.http.get(this.Posturl_aws + Linkext);
    return this.http.get(this.Posturl + Linkext);

  }


}

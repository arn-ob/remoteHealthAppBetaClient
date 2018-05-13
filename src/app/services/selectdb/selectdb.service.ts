import { Injectable } from '@angular/core';

@Injectable()
export class SelectdbService {
  url = 'http://localhost:5000/';     // Local Requset
  url_aws = 'http://healthappserver.us-east-2.elasticbeanstalk.com/';  // Cloud Requset

  select_db = this.url;


  constructor() { }

}

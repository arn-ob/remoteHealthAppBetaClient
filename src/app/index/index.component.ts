import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  log = true;
  token: any;
  constructor(private location: Location, private cookieService: CookieService) { }
  ngOnInit() {
    // Show data when start Page
    const isTokenSet = this.cookieService.get('token');
    if (isTokenSet) {
      this.log = false;
    }
    // Cookie Test
    // this.cookieService.set( 'Test1', 'Hello World 1' );
    // this.cookieService.set( 'Test2', 'Hello World 2' );
    // const cooke: any =  this.cookieService.getAll();
    // console.log(cooke.Test1);
    // console.log(cooke.Test2);
    // console.log(this.cookieService.get('Test1'));
  }
}

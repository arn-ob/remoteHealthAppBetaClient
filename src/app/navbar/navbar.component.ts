import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sign = false;
  logout = true;
  constructor() { }

  ngOnInit() {
    const isTokenSet = localStorage.getItem('token');
    if (isTokenSet) {
      this.sign = true;
      this.logout = false;
    }
  }

}

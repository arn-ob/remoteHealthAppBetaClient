import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private router: Router, private location: Location) { }

  ngOnInit() {
    localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('isRefresh');
    this.location.go('/');
    location.reload();
    // this.router.navigated = false;
    // this.router.navigateByUrl('/');
  }

}

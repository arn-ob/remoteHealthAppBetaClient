import { AuthenticationService } from './../../services/auth/authentication.service';
import { Router } from '@angular/router';
import { RoleSelectService } from './../../services/role-select/role-select.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.css']
})
export class RoleSelectionComponent implements OnInit {
  AllTrue: boolean;

  constructor(
    private role: RoleSelectService,
    private router: Router,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.AllTrue = this.role.isAllTrue();
  }

  // Set the cookie of the system role and navagate to the dashboad
  set_go (role, link) {
    this.auth.give_role_type(role);
    this.router.navigate([link]);
  }
}

import { RoleSelectService } from './../../services/role-select/role-select.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.css']
})
export class RoleSelectionComponent implements OnInit {

  constructor(
    private role: RoleSelectService
  ) { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.css']
})
export class SideContentComponent implements OnInit {

  UserMenuItems = ["DashBoard", "Courses","Mes infos"]
  SuperUserMenuItems = ["DashBoard", "Comptes administarteurs","Mes infos"]
  AdminMenuItems = ["DashBoard", "Recherche"]

  constructor() { }

  ngOnInit(): void {
  }

}

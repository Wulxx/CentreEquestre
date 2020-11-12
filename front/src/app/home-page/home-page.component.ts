import { Component, OnInit } from '@angular/core';

import {MainDisplayerComponent} from '../useful/main-displayer/main-displayer.component';
import { BigTitleComponent } from '../useful/big-title/big-title.component';

import {MyCoursesComponent} from './boxes/Users/my-courses/my-courses.component';
import {NextCoursesComponent} from './boxes/Users/next-courses/next-courses.component';

import {HomeContentComponent} from './boxes/Users/home-content/home-content.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  isAdmin = false;
  isUser = true;
  isMonitor = false;
  isSuperAdmin = false;

  constructor() { }

  ngOnInit(): void {
  }
}

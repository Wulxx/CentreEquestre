import { Component, Input } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';

import { LandingPageComponent } from './landing-page/landing-page.component';

import {NavBarComponent} from './useful/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'projet5A';
  showFiller = false;
  homePage = HomePageComponent;
}

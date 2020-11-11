import { Component, OnInit } from '@angular/core';
import {TilesComponent} from './tiles/tiles.component';
import {MainContent} from '../../../models/mainContent';

import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-main-displayer',
  templateUrl: './main-displayer.component.html',
  styleUrls: ['./main-displayer.component.css']
})
export class MainDisplayerComponent implements OnInit {
  contentList: MainContent[] = [];

  constructor() { }

  handleClicked(e): void {
    console.log(e);
  }

  ngOnInit(): void {
  }

}

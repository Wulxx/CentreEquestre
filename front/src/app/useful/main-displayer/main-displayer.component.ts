import { Component, OnInit, Input } from '@angular/core';
import {TilesComponent} from './tiles/tiles.component';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-main-displayer',
  templateUrl: './main-displayer.component.html',
  styleUrls: ['./main-displayer.component.css']
})
export class MainDisplayerComponent implements OnInit {
  @Input() public contentList: [] = [];

  constructor() { }

  handleClicked(e): void {
    console.log(e);
  }

  ngOnInit(): void {
  }

}

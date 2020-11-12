import { Component, OnInit, Input, Output, } from '@angular/core';
import {Cheval} from '../../models/cheval';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})

export class DetailPageComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 12, color: 'lightblue'},
    {text: 'Two', cols: 6, rows: 12, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 12, color: 'lightpink'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

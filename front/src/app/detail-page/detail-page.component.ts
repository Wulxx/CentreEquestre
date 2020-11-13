import { Component, OnInit, Input, Output, } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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

  type: string;
  id: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.type = params.type;
      this.id = params.id;
    });
  }

}

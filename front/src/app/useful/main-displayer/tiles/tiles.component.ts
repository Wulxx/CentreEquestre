import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MainContent} from '../../../../models/mainContent';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  @Input() public content: MainContent;
  @Output() clicked: EventEmitter<Event> = new EventEmitter();

  divClicked(e): void{
    console.log(e);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

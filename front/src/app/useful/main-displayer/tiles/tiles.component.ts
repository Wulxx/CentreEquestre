import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  @Input() public image;
  @Input() public name;
  @Input() public id;
  @Input() public type = 'horse';
  @Output() clicked: EventEmitter<Event> = new EventEmitter();

  divClicked(e): void{
    console.log(e);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

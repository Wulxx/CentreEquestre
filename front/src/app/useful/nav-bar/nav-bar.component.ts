import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})



export class NavBarComponent implements OnInit {
  @Output() clicked = new EventEmitter<boolean>();
  @Input() public navIsOpened: boolean;

  sandwichClicked(): void{
    this.clicked.emit(!this.navIsOpened);
    console.log(!this.navIsOpened);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

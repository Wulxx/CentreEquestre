import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-title',
  templateUrl: './big-title.component.html',
  styleUrls: ['./big-title.component.css']
})
export class BigTitleComponent implements OnInit {

  @Input() public title: string;

  constructor() { }

  ngOnInit(): void {
  }

}

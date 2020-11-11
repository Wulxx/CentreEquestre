import { Component, OnInit, Input, Output, } from '@angular/core';
import {User} from '../../models/Users';
import {Cheval} from '../../models/cheval';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}

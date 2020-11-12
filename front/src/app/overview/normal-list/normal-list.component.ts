import { Component, OnInit, Input, Output, ViewChild, AfterViewInit} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-normal-list',
  templateUrl: './normal-list.component.html',
  styleUrls: ['./normal-list.component.css']
})
export class NormalListComponent implements OnInit {

  @Input() public category: string;
  @Input() public Id: string;

  @Input() public values: [] = [];
  @Input() public DisplayedColumn: string[] = [];

  dataSource = new MatTableDataSource(this.values);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
    console.log('this.courses');
    console.log(this.values);
    this.dataSource = new MatTableDataSource(this.values);
  }

}

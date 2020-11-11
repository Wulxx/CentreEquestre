import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {CoursesElement} from '../../../../../models/Courses';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() public courses: CoursesElement[] = [];
  @Input() public isEditable = false;


  displayedColumns: string[] = ['Date', 'Cheval', 'Moniteur', 'Duree'];
  dataSource = new MatTableDataSource(this.courses);

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
    console.log(this.courses);
    this.dataSource = new MatTableDataSource(this.courses);
  }

}

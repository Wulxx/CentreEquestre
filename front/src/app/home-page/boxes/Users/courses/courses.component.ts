import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {CoursesElement} from '../../../../../models/Courses';
import {DialogComponent} from '../../../../useful/dialog/dialog.component';
import {DialogAjoutComponent} from '../../../../useful/dialog-ajout/dialog-ajout.component';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() public courses: CoursesElement[] = [];
  @Input() public isEditable = false;
  @Input() public isMonitor = false;
  @Input() public owned;
  @Input() public type;


  displayedColumns: string[];

  dataSource = new MatTableDataSource(this.courses);

  buildColumns(){
    console.warn("Ici les clefs");
    console.log(this.courses);
  }

  clearTable() {
    this.dataSource.data = [];
  }

  addData() {
    // this.dataSource.data.push(value);
    console.log("open diag");
    this.dialog.open(DialogAjoutComponent, {
      data: {owned: this.owned, type: 'admin'}
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  register(selectedElement) {
    console.log("open diag");
    this.dialog.open(DialogComponent, {
      data: {date: selectedElement.debutDate,
        monitor: selectedElement.assignedMonitor,
        user: localStorage.getItem('currentId'),
        lessonsId: selectedElement._id,
      owned: this.owned}
    });
  }


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    if (!this.isMonitor){
      this.displayedColumns = ['debutDate', 'endDate', 'assignedMonitor', 'name', 'name2',  'name23']
    }else{
      this.displayedColumns = ['name', 'name2',  'name23'];
    }
    console.log('this.courses');
    console.log(this.courses);
    this.buildColumns();
    this.dataSource = new MatTableDataSource(this.courses);
  }

}

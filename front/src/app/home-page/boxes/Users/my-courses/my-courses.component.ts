import { Component, OnInit, Input, Output} from '@angular/core';
import {CoursesComponent} from '../courses/courses.component';
import {CoursesElement} from '../../../../../models/Courses';
import { GetDataService } from '../../../../get-data.service';



@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})

export class MyCoursesComponent implements OnInit {

  @Input() public lessons;
  @Input() public isMonitor;
  @Input() public isAdmin = false;
  @Input() public type;
  @Output() public action;
  mylessons: CoursesElement[] = [];



  constructor(private getDataClient: GetDataService) { }

  getLessonsData(){
      this.lessons.map(item => {
        console.log("by id");
        console.log(item);
        this.getDataClient.getLessonsById(item)
          .subscribe(retour => this.mylessons.push(retour) );
      });
  }

  ngOnInit(): void {
    if (!this.isMonitor && !this.isAdmin){
      this.getLessonsData();
    }else{
      this.mylessons = this.lessons;
    }
    console.log("this.lessons");
    console.log(this.lessons);
  }

}

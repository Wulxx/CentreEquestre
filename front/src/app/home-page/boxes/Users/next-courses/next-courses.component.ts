import { Component, OnInit, Input } from '@angular/core';
import {CoursesComponent} from '../courses/courses.component';
import {CoursesElement} from '../../../../../models/Courses';
import { GetDataService } from '../../../../get-data.service';

@Component({
  selector: 'app-next-courses',
  templateUrl: './next-courses.component.html',
  styleUrls: ['./next-courses.component.css']
})
export class NextCoursesComponent implements OnInit {
  @Input() public lessons: CoursesElement[];
  @Input() public isMonitor;
  @Input() public type;

  constructor(private getDataClient: GetDataService) { }

  ngOnInit(): void {
  }

}

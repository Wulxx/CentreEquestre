import { Component, OnInit } from '@angular/core';
import {CoursesComponent} from '../courses/courses.component';
import {CoursesElement} from '../../../../../models/Courses';



@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})

export class MyCoursesComponent implements OnInit {
  COURSES_DATA: CoursesElement[] = [
    {Date: '10/02/20', Cheval: 'Petit Tonnerue', Moniteur: 'Alain', Duree: '1h30'},
    {Date: '11/02/20', Cheval: 'Petit Tonnerue', Moniteur: 'Monique', Duree: '1h30'},
    {Date: '10/02/20', Cheval: 'Petit Tonnerue', Moniteur: 'Alain', Duree: '1h30'},
    {Date: '10/02/20', Cheval: 'Petit Tonnerue', Moniteur: 'Alain', Duree: '1h30'},
    {Date: '10/02/20', Cheval: 'Petit Tonnerue', Moniteur: 'Alain', Duree: '1h30'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

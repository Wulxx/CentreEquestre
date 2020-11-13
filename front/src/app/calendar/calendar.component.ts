import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  allLessons: CoursesElement[] = [];

  getCourses(){
    console.warn("Début requete");
    this.clientData.getlessons()
      .subscribe(retour => {
        retour.map(item => this.allLessons.push(item));
        console.warn('cheval');
        console.warn(retour);
      } );
  }

  constructor(private clientData: GetDataService) { }

  ngOnInit(): void {
    this.getCourses();
  }

}

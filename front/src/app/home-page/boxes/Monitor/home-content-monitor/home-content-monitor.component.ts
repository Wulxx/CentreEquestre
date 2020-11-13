import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../../get-data.service';
import {Cheval} from '../../../../../models/cheval';
import {CoursesElement} from '../../../../../models/Courses';
import {Cavalier} from '../../../../../models/cavalier';
import {Teacher} from '../../../../../models/monitor';

@Component({
  selector: 'app-home-content-monitor',
  templateUrl: './home-content-monitor.component.html',
  styleUrls: ['../../../home-page.component.css']
})
export class HomeContentMonitorComponent implements OnInit {
  horses: Cheval[] = [];
  cavaliers: Cavalier[] = [];
  monitor: Teacher;
  myLessons: CoursesElement[] = [];

  constructor(private clientData: GetDataService) { }

  getHorsesData(){
    console.warn("Début requete");
    this.clientData.getHorses()
      .subscribe(retour => {
        this.setValues(retour);
        console.warn('cheval');
        console.warn(retour);
      } );
  }

  setValues(cheval: Cheval[]){
    cheval.map(item => this.horses.push(item));
    console.warn(this.horses);
  }


  getMyProfile(){
    this.clientData.getTeacher(localStorage.getItem('currentId'))
      .subscribe(retour => {
        this.monitor = retour;
        console.warn("Cavalier");
        console.warn(this.monitor);
        if (this.monitor.courses){
          this.monitor.courses.map(item => this.myLessons.push(item));
        }
        console.warn('cheval');
        console.warn(retour);
      });
  }


  ngOnInit(): void {
    this.getMyProfile();
    this.getHorsesData();
  }

}

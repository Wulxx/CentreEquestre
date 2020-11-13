import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../../get-data.service';
import {Cheval} from '../../../../../models/cheval';
import {CoursesElement} from '../../../../../models/Courses';
import {Cavalier} from '../../../../../models/cavalier';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['../../../home-page.component.css']
})
export class HomeContentComponent implements OnInit {

  horses: Cheval[] = [];
  allLessons: CoursesElement[] = [];
  cavalier: Cavalier;
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

  getCourses(){
    console.warn("Début requete");
    this.clientData.getlessons()
      .subscribe(retour => {
        retour.map(item => this.allLessons.push(item));
        console.warn('cheval');
        console.warn(retour);
      } );
  }

  getCavliers(){
    this.clientData.getcavalierById(localStorage.getItem('currentId'))
      .subscribe(retour => {
        this.cavalier = retour;
        console.warn("Cavalier");
        console.warn(this.cavalier);
        if (this.cavalier.courses){
          this.cavalier.courses.map(item => this.myLessons.push(item));
        }
        console.warn('cheval');
        console.warn(retour);
      });
  }

  setValues(cheval: Cheval[]){
    cheval.map(item => this.horses.push(item));
    console.warn(this.horses);
  }

  ngOnInit(): void {
    this.getCavliers();
    this.getHorsesData();
    this.getCourses();
  }

}

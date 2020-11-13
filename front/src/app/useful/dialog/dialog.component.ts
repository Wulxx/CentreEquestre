import { Component, OnInit, Input } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GetDataService } from '../../get-data.service';

export interface DialogData {
  date: string;
  monitor: string;
  user: string;
  lessonsId: string;
  owned: boolean;
  status: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {


  registerToCourse(){
    console.warn("Début requete");
    this.clientData.registerToCourse({lessonsId: this.data.lessonsId, user: localStorage.getItem('currentId') })
      .subscribe(retour => {
        console.warn('cheval');
        console.warn(retour);
      } );
  }

  suppressFromCourse(){
    console.warn("Début requete");
    this.clientData.suppresFromCourse({lessonsId: this.data.lessonsId, user: localStorage.getItem('currentId') })
      .subscribe(retour => {
        console.warn('cheval');
        console.warn(retour);
      } );
  }

  addMonitors(){
    console.warn("Début requete");
    this.clientData.registerToCourse({lessonsId: this.data.lessonsId, user: localStorage.getItem('currentId') })
      .subscribe(retour => {
        console.warn('cheval');
        console.warn(retour);
      } );
  }

  addTeacher(){
    console.warn("Début requete");
    this.clientData.registerToCourse({lessonsId: this.data.lessonsId, user: localStorage.getItem('currentId') })
      .subscribe(retour => {
        console.warn('cheval');
        console.warn(retour);
      } );
  }

  addAdmin(){
    console.warn("Début requete");
    this.clientData.registerToCourse({lessonsId: this.data.lessonsId, user: localStorage.getItem('currentId') })
      .subscribe(retour => {
        console.warn('cheval');
        console.warn(retour);
      } );
  }

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public clientData: GetDataService) {}

  ngOnInit(): void {

  }

}

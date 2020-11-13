import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from '../../get-data.service';
import {Cheval} from '../../../models/cheval';
import {Admin} from '../../../models/admin';
import {Cavalier} from '../../../models/cavalier';
import {Monitor} from '../../../models/monitor';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  informations: {} = {};
  profileType: string;
  id: string;

  getProfilData(profil: string, selection: string){
    console.log("retour");
    console.log(profil, selection);
    switch (profil){
      case 'horse':
        this.clientData.getHorse(selection)
        .subscribe(retour => {
          console.log("retour");
          console.log(retour);
            this.informations = retour;
            console.log("retour");
            console.log(retour);
        } );
        break;
      case 'Cavalier':
        this.clientData.getcavalierById(selection)
        .subscribe(retour => {
          console.log("retour");
          console.log(retour);
          this.informations = retour;
          console.log("retour");
          console.log(retour);
      } );
        break;
      case 'Admin':
        this.clientData.getAdmin(selection)
        .subscribe(retour => {
          console.log("retour");
          console.log(retour);
          this.informations = retour;
          console.log("retour");
          console.log(retour);
      } );
        break;
      case 'Teacher':
        this.clientData.getTeacher(selection)
        .subscribe(retour => {
          console.log("retour");
          console.log(retour);
          this.informations = retour;
      } );
        break;
      default: break;
    }
  }

  constructor(private clientData: GetDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("retour");

    this.activatedRoute.queryParams.subscribe(params => {
      this.profileType = params.type;
      this.id = params.id;
    });

    this.getProfilData(this.profileType, this.id);

  }



}

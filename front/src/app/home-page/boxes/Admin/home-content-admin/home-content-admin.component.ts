import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from '../../../../get-data.service';
import {Admin} from '../../../../../models/admin';
import {Teacher} from '../../../../../models/monitor';

@Component({
  selector: 'app-home-content-admin',
  templateUrl: './home-content-admin.component.html',
  styleUrls: ['../../../home-page.component.css']
})
export class HomeContentAdminComponent implements OnInit {

  @Input() Admins: Admin[] = [];
  @Input() Moniteurs: Teacher[] = [];

  constructor(private clientData: GetDataService) { }

  getAdmins(){
    this.clientData.getAllAdmin()
      .subscribe(retour => {
        this.Admins = retour;
        console.warn('admins');
        console.warn(retour);
      });
  }

  getMoniteurs(){
    this.clientData.getTeachers()
      .subscribe(retour => {
        this.Moniteurs = retour;
        console.warn('moniteurs');
        console.warn(retour);
      });
  }

  ngOnInit(): void {
    this.getAdmins();
    this.getMoniteurs();
  }

}

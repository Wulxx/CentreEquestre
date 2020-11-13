import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from '../../../../get-data.service';
import {Admin} from '../../../../../models/admin';
import {Teacher} from '../../../../../models/monitor';

@Component({
  selector: 'app-home-content-super-admin',
  templateUrl: './home-content-super-admin.component.html',
  styleUrls: ['../../../home-page.component.css']
})
export class HomeContentSuperAdminComponent implements OnInit {

  @Input() Admins: Admin[] = [];
  @Input() Moniteurs: Teacher[] = [];

  constructor(private clientData: GetDataService) { }


  getAdmins(){
    this.clientData.getAllAdmin()
      .subscribe(retour => {
        this.Admins = retour;
        console.warn('cheval');
        console.warn(retour);
      });
  }

  getMoniteurs(){
    this.clientData.getTeachers()
      .subscribe(retour => {
        this.Moniteurs = retour;
        console.warn("Cavalier");
        console.warn('cheval');
        console.warn(retour);
      });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {LoginServiceService} from '../../login-service.service';


@Component({
  selector: 'app-sign-buttons',
  templateUrl: './sign-buttons.component.html',
  styleUrls: ['./sign-buttons.component.css']
})
export class SignButtonsComponent implements OnInit {


  profilClick() {
    this.router.navigate(['/Detail', { id: localStorage.getItem('currentId') }]);
  }

  unLog(){
    this.LogService.logout();
    this.router.navigate(['/landing']);
  }

  constructor(private router: Router, private LogService: LoginServiceService) { }

  ngOnInit(): void {
  }

}

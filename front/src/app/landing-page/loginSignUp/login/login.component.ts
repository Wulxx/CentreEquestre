import { Component, OnInit, Inject, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { LoginServiceService } from '../../../login-service.service';
import {UserLogin} from '../../../../models/Users';

export interface LoginDialog {
  email: string;
  licenseNumber: string;
  phoneNumber: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  signUpValue: UserLogin = {email: '', phoneNumber: '', userName: '', password: ''};
  currentConnexionMode = 'email';
  type: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private UserService: LoginServiceService) {
    console.log(activatedRoute);
  }
  submit() {
    this.UserService.userLogIn(this.signUpValue, this.type)
    .subscribe(retour => {
      if (retour['status'] !== undefined){
          this.router.navigate(['/home']);
      }
    }
    );
    console.log(this.signUpValue);
  }

  onKey(value: string, key: string) {
    this.signUpValue[key] = value;
  }

  selectChanged(e){
    console.log(e);
    this.currentConnexionMode = e;
  }


  ngOnInit(): void {
    const currentToken = localStorage.getItem('id_token');
    const currenTokenExp = localStorage.getItem('expires_at');
    if (currentToken){
      if (this.UserService.isLoggedIn()){
        this.router.navigate(['/home']);
      }
    }


    this.activatedRoute.queryParams.subscribe(params => {
      this.type = params.type;
    });
  }

  ngOnDestroy(): void {
  }

}

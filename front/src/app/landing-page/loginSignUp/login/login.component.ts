import { Component, OnInit, Inject, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

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

  type: string;
  email: string;
  licenseNumber: string;
  phoneNumber: string;
  password: string;

  constructor(private activatedRoute: ActivatedRoute,private router: Router) {
    console.log(activatedRoute);
  }

  submit() {
    console.log(this.email);
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.type = params.type;
    });
  }

  ngOnDestroy(): void {
  }

}

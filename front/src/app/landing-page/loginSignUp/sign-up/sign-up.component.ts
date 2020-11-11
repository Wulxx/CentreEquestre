import { Component, OnInit } from '@angular/core';

export interface LoginDialog {
  email: string;
  name: string;
  lastname: string;
  licenseNumber: string;
  phoneNumber: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { LoginServiceService } from '../../../login-service.service';
import {UserCreation} from '../../../../models/Users';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  signUpValue: UserCreation = {name: '', lastName: '', licenseNumber: '', email: '', phoneNumber: '', password: ''};
  @Input() public type: string;
  playerName: string;

  submitLog(){
    console.log(this.signUpValue);
    this.UserService.createAccount(this.signUpValue)
      .subscribe(retour => console.log(retour));
  }

  onKey(value: string, key: string) {
    this.signUpValue[key] = value;
  }

  constructor(private UserService: LoginServiceService) { }

  ngOnInit(): void {
  }

}

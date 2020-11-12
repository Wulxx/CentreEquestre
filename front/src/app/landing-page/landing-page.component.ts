import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private UserService: LoginServiceService, private router: Router) { }

  ngOnInit(): void {
    const currentToken = localStorage.getItem('id_token');
    const currenTokenExp = localStorage.getItem('expires_at');
    if (currentToken){
      if (this.UserService.isLoggedIn()){
          this.router.navigate(['/home']);
      }
    }
  }

}

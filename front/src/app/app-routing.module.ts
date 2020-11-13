import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './landing-page/loginSignUp/login/login.component';
import { FirstFormeComponent } from './landing-page/loginSignUp/first-forme/first-forme.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ProfileComponent } from './detail-page/profile/profile.component';
import { SignUpComponent } from './landing-page/loginSignUp/sign-up/sign-up.component';
import { CalendarComponent } from './calendar/calendar.component';


export const appRouteList: Routes = [
  {
    path: 'landing',
    component: LandingPageComponent,
    children: [{
      path : '',
      component: FirstFormeComponent
    },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signUp',
        component: SignUpComponent
      }
    ],
    data : {some_data : 'some value'}
  },
  {
      path: 'home',
      component: HomePageComponent
  },
  {
      path: 'Detail',
      component: DetailPageComponent,
      children: [
        {path: '',
        component: ProfileComponent
      },
      {path: 'calendar',
      component: CalendarComponent
    },
    {path: 'profil',
    component: ProfileComponent
  }
      ]
  },
  {
      path: '**',
      redirectTo: 'landing'
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouteList,
      { enableTracing: false }) // <-- debugging purposes only)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

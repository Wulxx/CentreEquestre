import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './landing-page/loginSignUp/login/login.component';
import { FirstFormeComponent } from './landing-page/loginSignUp/first-forme/first-forme.component';


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
      }
    ],
    data : {some_data : 'some value'}
  },
  {
      path: 'home',
      component: HomePageComponent
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
      { enableTracing: true }) // <-- debugging purposes only)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

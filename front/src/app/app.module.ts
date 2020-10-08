import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
=======

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './home-page/home-page.component';

>>>>>>> 142a1dd2df1932e93350ab7ad941b3eaf130b19c

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
<<<<<<< HEAD
    UserComponent,
    HomePageComponent
=======
    UserComponent
>>>>>>> 142a1dd2df1932e93350ab7ad941b3eaf130b19c
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

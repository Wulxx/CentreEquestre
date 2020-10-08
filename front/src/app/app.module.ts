import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
=======
import { HomePageComponent } from './home-page/home-page.component';
>>>>>>> a983f9b0c7e610bf0a8d608a50f0e9fdfb1084e0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    AuthComponent,
    UserComponent
=======
    HomePageComponent
>>>>>>> a983f9b0c7e610bf0a8d608a50f0e9fdfb1084e0
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

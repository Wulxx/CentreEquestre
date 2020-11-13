import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './landing-page/loginSignUp/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { HomePageComponent } from './home-page/home-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './useful/nav-bar/nav-bar.component';

import { BigTitleComponent } from './useful/big-title/big-title.component';

import { MaterialModule} from './material.module';
import { SignUpComponent } from './landing-page/loginSignUp/sign-up/sign-up.component';
import { SignButtonsComponent } from './useful/sign-buttons/sign-buttons.component';
import { SideContentComponent } from './useful/side-content/side-content.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstFormeComponent } from './landing-page/loginSignUp/first-forme/first-forme.component';
import { MyCoursesComponent } from './home-page/boxes/Users/my-courses/my-courses.component';
import { NextCoursesComponent } from './home-page/boxes/Users/next-courses/next-courses.component';
import { CoursesComponent } from './home-page/boxes/Users/courses/courses.component';
import { MainDisplayerComponent } from './useful/main-displayer/main-displayer.component';
import { TilesComponent } from './useful/main-displayer/tiles/tiles.component';
import { HomeContentComponent } from './home-page/boxes/Users/home-content/home-content.component';
import { HomeContentAdminComponent } from './home-page/boxes/Admin/home-content-admin/home-content-admin.component';
import { HomeContentMonitorComponent } from './home-page/boxes/Monitor/home-content-monitor/home-content-monitor.component';
import { HomeContentSuperAdminComponent } from './home-page/boxes/superAdmin/home-content-super-admin/home-content-super-admin.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ProfileComponent } from './detail-page/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { MosaicListComponent } from './overview/mosaic-list/mosaic-list.component';
import { NormalListComponent } from './overview/normal-list/normal-list.component';
import { LessonComponent } from './detail-page/lesson/lesson.component';
import { ForgottenComponent } from './landing-page/loginSignUp/forgotten/forgotten.component';
import { DialogComponent } from './useful/dialog/dialog.component';
import { DialogAjoutComponent } from './useful/dialog-ajout/dialog-ajout.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,

    HomePageComponent,
    NavBarComponent,
    BigTitleComponent,
    SignUpComponent,
    SignButtonsComponent,
    SideContentComponent,
    LandingPageComponent,
    FirstFormeComponent,
    MyCoursesComponent,
    NextCoursesComponent,
    CoursesComponent,
    MainDisplayerComponent,
    TilesComponent,
    HomeContentComponent,
    HomeContentAdminComponent,
    HomeContentMonitorComponent,
    HomeContentSuperAdminComponent,
    DetailPageComponent,
    ProfileComponent,
    MosaicListComponent,
    NormalListComponent,
    LessonComponent,
    ForgottenComponent,
    DialogComponent,
    DialogAjoutComponent,
    CalendarComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cheval } from '../models/cheval';
import { Admin } from '../models/admin';
import { CoursesElement, DialogData } from '../models/Courses';
import { Cavalier } from '../models/cavalier';
import { Teacher } from '../models/monitor';


@Injectable({
  providedIn: 'root'
})


export class GetDataService {
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}
   public getHorses(): Observable<Cheval[]> {
    return this.http.get<Cheval[]>(`http://localhost:4043/horses/getHorse`).pipe(
      tap(res => console.log(res)),
    );
  }

  public getHorse(id: string): Observable<Cheval> {
    return this.http.get<Cheval>(`http://localhost:4043/horses/getHorse/${id}`).pipe(
      tap(res => console.log(res)),
    );
  }
  public getlessons(): Observable<CoursesElement[]> {
    return this.http.get<CoursesElement[]>(`http://localhost:4043/lessons/lessons`)
    .pipe(
      tap(res => console.log(res)),
    );
  }

  public registerToCourse(user: DialogData): Observable<DialogData> {
    return this.http.post<DialogData>(`http://localhost:4043/cavalier/register/${user.user}`, user, this.httpOptions)
    .pipe(
      tap(res => console.log(res)),
    );
  }

  public createCourse(user: CoursesElement): Observable<CoursesElement> {
    return this.http.post<CoursesElement>(`http://localhost:4043/teacher/create/${localStorage.getItem('currentId')}`,
     user, this.httpOptions)
    .pipe(
      tap(res => console.log(res)),
    );
  }

  public createAdmin(user: Admin): Observable<Admin> {
    return this.http.post<Admin>(`http://localhost:4043/superAdmin/createAdmin/`, user, this.httpOptions)
    .pipe(
      tap(res => console.log(res)),
    );
  }
  public createTeacher(user: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`http://localhost:4043/Admin/createTeacher`, user, this.httpOptions)
    .pipe(
      tap(res => console.log(res)),
    );
  }

  public suppresFromCourse(user: DialogData): Observable<DialogData> {
    return this.http.post<DialogData>(`http://localhost:4043/cavalier/suppress/${user.user}`, user, this.httpOptions)
    .pipe(
      tap(res => console.log(res)),
    );
  }
  public getLessonsById(lessonId: string): Observable<CoursesElement> {
    return this.http.get<CoursesElement>(`http://localhost:4043/lessons/lesson/${lessonId}`)
    .pipe(
      tap(res => console.log(res)),
    );
  }

  public getAdmin(id: string): Observable<Admin> {
    return this.http.get<Admin>(`http://localhost:4043/Admin/Admin/${id}`).pipe(
      tap(res => console.log(res)),
    );
  }

  public getAllAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`http://localhost:4043/Admin/Admin/`).pipe(
      tap(res => console.log(res)),
    );
  }

  public getcavaliers(): Observable<Cavalier[]> {
    return this.http.get<Cavalier[]>(`http://localhost:4043/cavalier/cavaliers`).pipe(
      tap(res => console.log(res)),
    );
  }

  public getcavalierById(id: string): Observable<Cavalier> {
    return this.http.get<Cavalier>(`http://localhost:4043/cavalier/${id}`).pipe(
      tap(res => console.log(res)),
    );
  }

  public getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`http://localhost:4043/teacher/teachers`).pipe(
      tap(res => console.log(res)),
    );
  }
  public getTeacher(id: string): Observable<Teacher> {
    return this.http.get<Teacher>(`http://localhost:4043/teacher/teachers/${id}`).pipe(
      tap(res => console.log(res)),
    );
  }
}

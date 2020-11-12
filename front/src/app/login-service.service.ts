import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as moment from 'moment';

import {UserCreation, UserLogin} from '../models/Users';
@Injectable({
  providedIn: 'root'
})


export class LoginServiceService {

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

    /** POST: add a new hero to the server */
  public createAccount(user: UserCreation): Observable<UserCreation> {
      return this.http.post<UserCreation>('http://localhost:4043/user/create', user, this.httpOptions);
    }

    // tslint:disable-next-line:typedef
  private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn, 'second');

      localStorage.setItem('id_token', authResult.id_token);
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
}

// tslint:disable-next-line:typedef
public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
}

// tslint:disable-next-line:typedef
isLoggedOut() {
    return !this.isLoggedIn();
}

// tslint:disable-next-line:typedef
getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
}

  public userLogIn(user: UserLogin, type: string): Observable<UserLogin> {
      return this.http.post<UserLogin>(`http://localhost:4043/${type.toLowerCase()}/signIn`, user, this.httpOptions)
      .pipe(
        tap(res => console.log("il a res " + res)),
        tap(res => this.setSession(res))
      );
    }


    // tslint:disable-next-line:typedef
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}

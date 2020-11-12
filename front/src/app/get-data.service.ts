import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cheval } from '../models/cheval';

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

  constructor(private http: HttpClient) {
      this.options.authorisazion = localStorage.getItem('id_token');
   }


   public getHorses() {
    this.http.get(`http://localhost:4043/${type.toLowerCase()}/signIn`);
  }
}

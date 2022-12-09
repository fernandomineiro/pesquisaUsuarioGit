import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Git } from '../models/git';
import { Repo } from '../models/repo';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GitService {

  base_path = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


  getUserGit(user: any): Observable<Git> {
    return this.http
      .get<Git>(this.base_path+  '/users/' + user, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getRepoGit(user: any): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/users/' + user+ '/repos', this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }




}


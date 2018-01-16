import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class AuthenticationService {
  private baseUrl = 'http://jfsasystem.somee.com/api/';  
  private resgiterUrl = 'SignUpByEmail'; 
  private authToken: any;
  private user: any;
  private httpOptions: any;
  
  constructor(private httpClient: HttpClient) { }


  createAuthenticationHeaders() {
    this.loadToken();
    this.httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'authorization': this.authToken
        })
    };
}

loadToken() {
    this.authToken = localStorage.getItem('token');
}
  registerUser(newUser: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + this.resgiterUrl, newUser, httpOptions).pipe(
        tap((response: any) => {
            return JSON.stringify(response);
        }),
        catchError(this.handleError<any>('signupUser'))
    );
}

// loggedIn(){
//   return tokenNotExpired();
// }
storeUserData(token, user) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  this.authToken = token;
  this.user = user;
}

loggedIn(){
  return tokenNotExpired();
}


private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
  };
}

private log(custom: any) {
  console.log(custom);
}
}

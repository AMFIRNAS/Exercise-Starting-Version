import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
 
  // store the URL for redirecting after logging in
  redirectUrl: string;
 
  public login(): Observable<boolean> {
     return Observable.of(true).do(val => this.isLoggedIn = true);
   }
 
  public logout() : void {
     this.isLoggedIn = false;
  }
}
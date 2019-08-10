import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Login, AuthActionTypes, Logout } from './auth.actions';
import { tap } from 'rxjs/operators';
import { json } from 'body-parser';
import { Router } from '@angular/router';
import { defer, of } from 'rxjs';



@Injectable()
export class AuthEffects {
  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action => localStorage.setItem('user', JSON.stringify(action.payload.user)))
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LogoutAction),
    tap(action => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login');
    })
  );
 
  @Effect()
  init$ = defer(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      return of(new Login({user: JSON.parse(userData)}));
    }
    // tslint:disable-next-line: one-line
    else {
      return of(new Logout());
    }
    //userData ? of(new Login(JSON.parse(userData))) : of(new Logout());
  });

  constructor(private actions$: Actions, private router: Router) {}

}

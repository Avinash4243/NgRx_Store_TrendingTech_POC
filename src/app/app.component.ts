import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { AppState } from './reducers';
import { Logout } from './auth/auth.actions';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isLoggedIn, isLoggedOut } from './auth/auth.selectors';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    adminName: string = 'Avinash';
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;

    constructor(private store: Store<AppState>, private route: Router) {

    }

    // ngOnInit() { 
    //  this.store.subscribe(
    //   state => {
    //     this.isLoggedIn = state['auth'].loggedIn;
    //     console.log(this.isLoggedIn);
    //     this.isLoggedOut = !state['auth'].loggedIn;
    //     console.log(this.isLoggedOut);
    //   });

    // }
    ngOnInit() {
    this.isLoggedIn$ =  this.store.pipe(
      select(isLoggedIn)
     );

     this.isLoggedOut$ =  this.store.pipe(
      select(isLoggedOut)
     );

    }

    getMeOut() {
      this.store.dispatch(new Logout());
      //this.route.navigateByUrl('/');
    }

    // shouldDisabled(): boolean {
    //   return this.isLoggedOut$;
    // }
}

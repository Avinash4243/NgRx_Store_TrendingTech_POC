import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Store} from '@ngrx/store';

import {AuthService} from '../auth.service';
import {tap} from 'rxjs/operators';
import {noop} from 'rxjs';
import {Router} from '@angular/router';
import { AppState } from '../../reducers';
import { Login } from '../auth.actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private fb: FormBuilder,
      private auth: AuthService,
      private router: Router,
      private store: Store<AppState>) {

      this.form = fb.group({
          email: ['a.aa.kumar.pandey@accenture.com', [Validators.required]],
          password: ['ngrx', [Validators.required]]
      });

  }

  ngOnInit() {

  }

  login() {
    const credential = this.form.value;
    this.auth.login(credential.email, credential.password).
    pipe(
      tap(user => {
        this.store.dispatch(new Login({user}));
        this.router.navigateByUrl('/technologies');
      })
    ).subscribe(
      noop,
      () => alert('Credential is invalid. Please try again')
    );
  }


}

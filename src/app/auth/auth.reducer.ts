import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import * as AuthActions from '../auth/auth.actions';


export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function authReducer(state = initialAuthState, action: AuthActions.AuthenticationActions): AuthState {
  switch (action.type) {
    case AuthActions.AuthActionTypes.LoginAction:
      return{
        loggedIn: true,
        user: action.payload.user
      };
    case AuthActions.AuthActionTypes.LogoutAction:
      return{
        loggedIn: false,
        user: undefined
      };
    default:
      return state;
  }
}

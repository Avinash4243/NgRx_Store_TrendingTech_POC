import { createSelector } from "@ngrx/store";

export const selectAuthState = state => state.auth;

export const isLoggedIn = createSelector(
    selectAuthState,
// projector function
    auth => auth.loggedIn
);
export const isLoggedOut = createSelector(
    isLoggedIn,
// projector function
    loggedIn => !loggedIn
);



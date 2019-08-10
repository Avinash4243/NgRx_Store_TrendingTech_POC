import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { TechnologyActionTypes, TechnologyRequested, TechnologyLoaded, AllTechnologiesRequested, AllTechnologiesLoaded, LessonsPageRequested, LessonsPageLoaded, LessonsPageErrored } from "./technology.actions";
import { mergeMap, map, withLatestFrom, filter, catchError } from "rxjs/operators";
import { CoursesService } from "./services/technologies.service";
import { Store, select } from "@ngrx/store";
import { AppState } from "../reducers";
import { isAllTechnologiesLoaded } from "./technology.selectors";
import { of } from "rxjs";


@Injectable()
export class TechnologyEffects {

    @Effect()
    loadTechnology$ = this.actions$.pipe(
        ofType<TechnologyRequested>(TechnologyActionTypes.TechnologyRequested),
        mergeMap(action => this.technologyService.findTechnologyById(action.payload.technologyId)),
        map(technology => new TechnologyLoaded({technology}))
    );
    

    // Getting all technologies from backend and firing new all technologies loaded event
    @Effect()
    technologies$ = this.actions$.pipe(
        ofType<AllTechnologiesRequested>(TechnologyActionTypes.AllTechnologiesRequested),
        // This operator is used to combine to latest value of two observable
        withLatestFrom(this.store.pipe(select(isAllTechnologiesLoaded))),
        filter(([action, isAllTechnologiesLoaded]) => !isAllTechnologiesLoaded),
        mergeMap(action => this.technologyService.findAllCourses()),
        map(technologies => new AllTechnologiesLoaded({technologies}))
    );

    @Effect()
    loadLessons$ = this.actions$.pipe(
        ofType<LessonsPageRequested>(TechnologyActionTypes.LessonsPageRequested),
        mergeMap(action => this.technologyService.findLessons(action.payload.technologyId,
            action.payload.page.pageIndex, action.payload.page.pageSize).pipe(
                catchError(err => {
                    this.store.dispatch(new LessonsPageErrored());
                    return of([]);
                })
            )),
        map(lessons => new LessonsPageLoaded({lessons}))
    );
    constructor(private actions$: Actions, private technologyService: CoursesService, private store: Store<AppState>) {

    }


}

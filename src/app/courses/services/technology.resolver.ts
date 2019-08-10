


import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Technology} from "../model/technology";
import {Observable} from "rxjs";
import {CoursesService} from "./technologies.service";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../reducers";
import { selectTechnologyById } from "../technology.selectors";
import { tap, filter, first } from "rxjs/operators";
import { TechnologyRequested } from "../technology.actions";



@Injectable()
export class TechnologyResolver implements Resolve<Technology> {

    constructor(private coursesService: CoursesService, private store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Technology> {
        const technologyId = route.params['id'];
        return this.store.pipe(
            select(selectTechnologyById(technologyId)),
            tap(
                technology => !technology ? this.store.dispatch(new TechnologyRequested({technologyId})) : ''
               ),
            filter(technology => !!technology),
            first()
        );

        //return this.coursesService.findTechnologyById(technologyId);
    }

}


import {Component, OnInit} from '@angular/core';
import {Technology} from "../model/technology";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CoursesService} from "../services/technologies.service";
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { AllTechnologiesRequested } from '../technology.actions';
import { selectAllTechnologies, selectBeginnerTechnologies, selectAdvancedTechnologies, selectPromoCount } from '../technology.selectors';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number>;

    beginnerCourses$: Observable<Technology[]>;

    advancedCourses$: Observable<Technology[]>;

    constructor(private technologyService: CoursesService, private store: Store<AppState>) {

    }

    ngOnInit() {

        //const technologies$ = this.technologyService.findAllCourses();

        this.store.dispatch(new AllTechnologiesRequested());

        // const technologies$ = this.store.pipe(
        //     select(selectAllTechnologies)
        // );

        this.beginnerCourses$ = this.store.pipe(
            select(selectBeginnerTechnologies)
        );
        this.advancedCourses$ = this.store.pipe(
            select(selectAdvancedTechnologies)
        );
        this.promoTotal$ = this.store.pipe(
            select(selectPromoCount)
        );

        // this.beginnerCourses$ = technologies$.pipe(
        //   map(technologies => technologies.filter(technology => technology.category === 'BEGINNER') )
        // );

        // this.advancedCourses$ = technologies$.pipe(
        //     map(technologies => technologies.filter(technology => technology.category === 'ADVANCED') )
        // );

        // this.promoTotal$ = technologies$.pipe(
        //     map(technologies => technologies.filter(technology => technology.promo).length)
        // );

    }

}

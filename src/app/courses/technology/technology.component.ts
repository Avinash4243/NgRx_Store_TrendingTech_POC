import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {Technology} from "../model/technology";
import {CoursesService} from "../services/technologies.service";
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge, fromEvent, Observable} from "rxjs";
import {LessonsDataSource} from "../services/lessons.datasource";
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { PageQuery } from '../technology.actions';
import { isLoading } from '../technology.selectors';


@Component({
    selector: 'technology',
    templateUrl: './technology.component.html',
    styleUrls: ['./technology.component.css'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit, AfterViewInit {

    technology: Technology;

    dataSource: LessonsDataSource;

    loading$: Observable<boolean>;

    displayedColumns= ["seqNo", "description", "duration"];

    @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;


    constructor(private route: ActivatedRoute,
                private coursesService: CoursesService,
                private store: Store<AppState>) {

    }

    ngOnInit() {

        this.technology = this.route.snapshot.data["technology"];
        const initialPage: PageQuery = {
            pageIndex: 0,
            pageSize: 3,
        };

        this.loading$ = this.store.pipe(
            select(isLoading)
        );

        this.dataSource = new LessonsDataSource(this.store);

        this.dataSource.loadLessons(this.technology.id, initialPage);

    }

    ngAfterViewInit() {

        this.paginator.page
        .pipe(
            tap(() => this.loadLessonsPage())
        )
        .subscribe();

    }

    loadLessonsPage() {
        const newPage = {
            pageIndex: this.paginator.pageIndex,
            pageSize: this.paginator.pageSize
        }
        this.dataSource.loadLessons(
            this.technology.id,
            newPage);
    }


}

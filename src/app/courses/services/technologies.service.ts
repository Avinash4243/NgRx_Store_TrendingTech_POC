

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Technology} from "../model/technology";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";


@Injectable()
export class CoursesService {

    constructor(private http: HttpClient) {

    }

    findTechnologyById(technologyId: number): Observable<Technology> {
        return this.http.get<Technology>(`/api/technologies/${technologyId}`);
    }

    findAllCourses(): Observable<Technology[]> {
        return this.http.get('/api/technologies')
            .pipe(
                map(res => res['payload'])
            );
    }

    findAllCourseLessons(technologyId:number): Observable<Lesson[]> {
        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('technologyId', technologyId.toString())
                .set('pageNumber', "0")
                .set('pageSize', "1000")
        }).pipe(
            map(res =>  res["payload"])
        );
    }

    findLessons(
        technologyId:number,
        pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('technologyId', technologyId.toString())
                .set('filter', '')
                .set('sortOrder', 'asc')
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res["payload"])
        );
    }


    saveTechnology(technologyId: number, changes: Partial<Technology>) {
        return this.http.put('/api/technologies/' + technologyId, changes);
    }


}
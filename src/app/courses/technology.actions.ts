import { Action } from "@ngrx/store";
import { Technology } from "./model/technology";
import { Update } from "@ngrx/entity";
import { Lesson } from "./model/lesson";

export enum TechnologyActionTypes  {
    // ---------------- ORIGIN NAME of action------- Action Name--------
    TechnologyRequested = '[View Course Page] Course Requested',
    TechnologyLoaded = '[Technology API] Course Loaded',
    AllTechnologiesRequested = '[Home Page] All Technologies Requested',
    AllTechnologiesLoaded = '[All Technologies API] All Technologies Loaded',
    TechnologyUpdated = '[View Course Dialog] Technology Details Updated',

    LessonsPageRequested = '[Technology Landing Page] Lessons Page Requested',
    LessonsPageLoaded = '[Technology API] Lessons Page Loaded',
    LessonsPageErrored = '[Technology API] Lessons Page Errored'
}

export class TechnologyRequested implements Action {
    readonly type = TechnologyActionTypes.TechnologyRequested;

    constructor(public payload: {technologyId: number}){

    }
}
export class TechnologyLoaded implements Action {
    readonly type = TechnologyActionTypes.TechnologyLoaded;

    constructor(public payload: {technology: Technology}){

    }

}
export class AllTechnologiesRequested implements Action {
    readonly type = TechnologyActionTypes.AllTechnologiesRequested;
}

export class AllTechnologiesLoaded implements Action {
    readonly type = TechnologyActionTypes.AllTechnologiesLoaded;

    constructor(public payload: {technologies: Technology[]}) {

    }

}

export class TechnologyUpdated implements Action {
    readonly type = TechnologyActionTypes.TechnologyUpdated;

    constructor(public payload: {technology: Update<Technology>}) {

    }

}

export interface PageQuery{
    pageIndex: number;
    pageSize: number;
}
export class LessonsPageRequested implements Action {
    readonly type = TechnologyActionTypes.LessonsPageRequested;

    constructor(public payload: {technologyId: number, page: PageQuery}) {

    }

}
export class LessonsPageLoaded implements Action {
    readonly type = TechnologyActionTypes.LessonsPageLoaded;

    constructor(public payload: {lessons: Lesson[]}) {

    }

}
export class LessonsPageErrored implements Action {
    readonly type = TechnologyActionTypes.LessonsPageErrored;

}
export type TechnologyActions = TechnologyRequested |
                                TechnologyLoaded |
                                AllTechnologiesRequested |
                                AllTechnologiesLoaded |
                                TechnologyUpdated |
                                LessonsPageRequested |
                                LessonsPageLoaded |
                                LessonsPageErrored;


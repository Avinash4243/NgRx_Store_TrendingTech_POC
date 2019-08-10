import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TechnologiesState } from './technology.reducers';
import * as fromTechnology from './technology.reducers';
import * as fromLesson from './lesson.reducers';
import { LessonsState } from './lesson.reducers';
import { PageQuery } from './technology.actions';

export const selectTechnologiesState = createFeatureSelector<TechnologiesState>('technologies');

export const selectLessonsState = createFeatureSelector<LessonsState>('lessons');

export const selectTechnologyById = (technologyId: number) => createSelector(
        selectTechnologiesState,
        technologiesState => technologiesState.entities[technologyId]
    );

export const selectAllTechnologies = createSelector(
    selectTechnologiesState,
    fromTechnology.selectAll
);
export const selectBeginnerTechnologies = createSelector(
    selectAllTechnologies,
    technologiesState => technologiesState.filter(technology => technology.category === 'BEGINNER')
);
export const selectAdvancedTechnologies = createSelector(
    selectAllTechnologies,
    technologiesState => technologiesState.filter(technology => technology.category === 'ADVANCED')
);
export const selectPromoCount = createSelector(
    selectAllTechnologies,
    technologiesState => technologiesState.filter(technology => technology.promo).length
);
export const isAllTechnologiesLoaded = createSelector(
    selectTechnologiesState,
    technologiesState => technologiesState.isAllTechnologiesLoaded
);

// selectors for lessons entity
export const selectAllLessons = createSelector(
    selectLessonsState,
    fromLesson.selectAll
);

export const selectRequestedLessons = (technologyId: number, page: PageQuery) => createSelector(
    selectAllLessons,
    lessons => {
        const start = page.pageIndex * page.pageSize,
              end = start + page.pageSize;
       return lessons.filter(lesson => lesson.technologyId === technologyId).slice(start, end);
    }
);

export const isLoading = createSelector(
    selectLessonsState,
    lessonState => lessonState.loading
);


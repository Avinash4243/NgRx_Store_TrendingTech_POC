import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import { Technology } from './model/technology';
import { TechnologyActions, TechnologyActionTypes } from './technology.actions';
import { Lesson } from './model/lesson';


/** storing array in store is not a good option as it will slow the performance in case of CRUD opertaions- performance impacted */
// export interface TechnologiesState {
//     technologies: Technology[];
// }

export interface TechnologiesState extends EntityState<Technology>{
    isAllTechnologiesLoaded: boolean;

}

// This fascilitate reducers and selectors implementation
export const adapter: EntityAdapter<Technology> =
    createEntityAdapter<Technology>();

export const initialTechnologiesState: TechnologiesState = adapter.getInitialState({
    isAllTechnologiesLoaded : false,
});

export function technologiesReducers (state = initialTechnologiesState, action: TechnologyActions): TechnologiesState {
    switch (action.type)
    {
        case TechnologyActionTypes.TechnologyLoaded:
           return adapter.addOne(action.payload.technology, state);
        case TechnologyActionTypes.AllTechnologiesLoaded:
            return adapter.addAll(action.payload.technologies, {...state, isAllTechnologiesLoaded: true});
        case TechnologyActionTypes.TechnologyUpdated:
            return adapter.updateOne(action.payload.technology, state);
        default: {
            return state;
        }
    }
}

// leveraging pre built selector for common operations like getting all entities in order or all ids
export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = adapter.getSelectors();


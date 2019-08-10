import { EntityAdapter, createEntityAdapter, EntityState } from "@ngrx/entity";
import { Lesson } from "./model/lesson";
import { TechnologyActions, TechnologyActionTypes } from "./technology.actions";
import { ComparerNum } from "@ngrx/entity/src/models";

// Lessons Entity State interface
export interface LessonsState extends EntityState<Lesson>{
    loading: boolean;

}

function sortByTechnologyAndSeqNo(l1: Lesson, l2: Lesson){
    const compare = l1.technologyId - l2.technologyId;
    if (compare !== 0) {
        return  compare;
    }
    else l1.seqNo - l2.seqNo;

}

// Adapter for selector and reducers for lesson entity
export const adapter: EntityAdapter<Lesson> = createEntityAdapter<Lesson>(
    {
        sortComparer: sortByTechnologyAndSeqNo
    }
);

export const initialLessonsState: LessonsState = adapter.getInitialState({
    loading: false
});

export function lessonsReducers (state = initialLessonsState, action: TechnologyActions): LessonsState {
    switch (action.type)
    {
        case TechnologyActionTypes.LessonsPageRequested:
            return {
                ...state, loading: true
            }
    
        case TechnologyActionTypes.LessonsPageLoaded:
          return  adapter.addMany(action.payload.lessons, {...state, loading: false});
        
        case TechnologyActionTypes.LessonsPageErrored:
            return {
                ...state, loading: false
            }

        default: {
            return state;
        }
    }
}

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = adapter.getSelectors();

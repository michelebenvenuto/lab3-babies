import { omit } from 'lodash'

import * as types from '../types/eventsToBaby'

const eventsToBaby = (state = {}, action) => {
    switch(action.type){
        case types.EVENT_ADDED_TO_BABY: {
            return {
                ...state,
                [action.payload.babyId]: [...action.payload.babyId, action.payload.eventId]
            };
        }
        case types.EVENT_DELETED_FROM_BABY: {
            return {
                ...state,
                [action.payload.babyId]: omit(action.payload.babyId, action.payload.eventId)
            };
        }
        default: {
            return state;
        }
    }
};

export default eventsToBaby;

export const getBabyEvents = babyId => state[babyId];
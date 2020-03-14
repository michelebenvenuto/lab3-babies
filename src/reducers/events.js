

import * as types from '../types/events'

const events = (state = {}, action) => {
    switch(action.type){
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.id] : action.payload
            };
        }
        default:{
            return state;
        }
    }
};

export default events;

export const getEvent = (state, id) => state[id];
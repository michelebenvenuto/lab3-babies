import { combineReducers } from 'redux';
import omit from 'lodash'

import * as types from '../types/events'

const events = (state = {}, action) => {
    switch(action.type){
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.id] : action.payload
            };
        }
    }
};

export default events;

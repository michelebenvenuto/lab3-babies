import { combineReducers } from 'redux';

import * as types from '../types/babies';

const byId = (state = {}, action) => {
    switch(action.type){
        case types.BABY_ADDED: {
            return {
                ...state,
                [action.payload.id] : action.payload
            };
        }
        default: {
            return state;
        }
    }
};

const byOrder = (state = [], action) => {
    switch(action.type){
        case types.BABY_ADDED: {
            return [...state, action.payload.id];   
        }
        default: {
            return state;
        }
    }
}

const selectBaby = (state = null, action) => {
    switch(action.type){
        case types.BABY_SELECTED: {
            return action.payload.id;
        }
    }
}

const babies = combineReducers({
    byId,
    byOrder,
    selectBaby
});

export default babies;

export const getBabie = (state, id) => state.byId[id];
export const getBabies = state => state.byOrder.map(
    id => getBabie (state, id)
)
export const getSelectedBaby = state => state.selectBaby

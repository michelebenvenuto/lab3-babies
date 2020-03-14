import { combineReducers } from 'redux';

import babies, * as babiesSelectors from './babies';
import events, * as eventsSelectors from './events';
import eventsToBaby, * as eventsToBabySelector from './eventsToBaby';

const reducer = combineReducers({
    babies,
    events,
    eventsToBaby
})

export default reducer;

//Selectors for babies 
export const getBabie = (state, id) => babiesSelectors.getBabie(state.babies, id);
export const getBabies = state => babiesSelectors.getBabies(state.babies);
export const getSelectedBaby = state => babiesSelectors.getSelectedBaby(state.babies);
// Selectors for events
export const getEvent = (state, id) => eventsSelectors.getEvent(state.events, id)
//Selectors for eventsToBabies
export const getBabyEvents = (state, babyId) => eventsToBabySelector.getBabyEvents(state.eventsToBaby, babyId);
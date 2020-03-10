import { combineReducers } from 'react';

import babies, * as babiesSelectors from './babies';
import events from './events';
import eventsToBaby, * as eventsToBabySelector from './eventsToBaby';

const reducer = combineReducers({
    babies,
    events,
    eventsToBaby
})

export default reducer;

import * as types from  '../types/events';

export const addEvent = (id, tipo, info, date) => ({
    type: types.EVENT_ADDED,
    payload:{
        id,
        tipo,
        info,
        date
    }
});

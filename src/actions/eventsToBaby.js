import * as types from  '../types/eventsToBaby';

export const addEventToBaby = (babyId, eventId) => ({
    type: types.EVENT_ADDED_TO_BABY,
    payload:{
        babyId,
        eventId
    }
});

export const deleteEventFromBaby = (babyId, eventId) => ({
    type: types.EVENT_DELETED_FROM_BABY,
    payload: {
        babyId,
        eventId
    }
})
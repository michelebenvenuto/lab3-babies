import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/eventsToBaby';
const Event =({
    eventInfo,
    onDelete,
    currBaby
}) => (
    <div className = 'event-container'>
        <button className ='delete-event' onClick={()=> onDelete(currBaby)}>
            {'X'}
        </button>
        <div>
            {'Tipo: ' + eventInfo.tipo}
        </div>
        <div>
            {'Info: ' + eventInfo.info}
        </div>
        <div>
            {'Fecha: ' + eventInfo.date}
        </div>
    </div>
)

export default connect(
    (state, {id}) => ({
        eventInfo: selectors.getEvent(state, id),
        currBaby: selectors.getSelectedBaby(state)
    }),
    (dispatch , {id}) => ({
        onDelete(currBaby){ 
            dispatch(actions.deleteEventFromBaby(currBaby), id)
        }
    })
)(Event)
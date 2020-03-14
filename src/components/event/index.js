import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';

const Event =({
    eventInfo
}) => (
    <div>
        {eventInfo.tipo + '/n' + eventInfo.info + '/n' + eventInfo.date}
    </div>
)

export default connect(
    (state, {id}) => ({
        eventInfo: selectors.getEvent(state, id)
    })
)(Event)
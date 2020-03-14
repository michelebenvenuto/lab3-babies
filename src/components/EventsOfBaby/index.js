import {size} from 'lodash'
import React from 'react';
import {connect} from 'react-redux';

import './styles.css'
import * as selectors from '../../reducers';
import Event from '../event';

const EventsOfBaby = ({ eventsOfBaby }) => (
    <div className="event-conteiner">
      {
        size(eventsOfBaby) === 0 ? (
          <h1>
            {'Este bebe no tiene eventos :('}
          </h1>
        ) : (
          eventsOfBaby.map(
            id => (
              <Event
                key={id}
                id = {id}
              />
            ),
          )
        )
      }
    </div>
    
  );

export default connect(
    state => ({
        eventsOfBaby: selectors.getBabyEvents(state, selectors.getSelectedBaby(state)),
    }),
)(EventsOfBaby);
import {size} from 'lodash'
import React from 'react';
import {connect} from 'react-redux';

import './styles.css'
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';
import Baby from '../baby';

const Babies = ({ allBabies }) => (
    <div className="babies-container">
      {
        size(allBabies) === 0 ? (
          <h1>
            {'No hay bebes :('}
          </h1>
        ) : (
          allBabies.map(
            id => (
              <Baby
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
        allBabies: selectors.getBabies(state),
    }),
)(Babies);
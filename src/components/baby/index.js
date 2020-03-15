import React from 'react';
import { connect } from 'react-redux';


import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';

const Baby = ({
    info,
    isSelected = false,
    onClick,
}) => (
    <div
    className={
        `
          baby
          ${isSelected ? 'baby--selected' : ''}
        `
      }
      onClick={onClick}
    >
        <div
            className = 'name'
        >
            {info.name + ' '+ info.lastName}
        </div>
    </div>
)

export default connect(
    (state, { id }) =>({
        info : selectors.getBabie(state,id),
        isSelected: selectors.getSelectedBaby(state) === id,
    }),
    (dispatch, { id }) => ({
        onClick(){
            console.log(id);
            dispatch(actions.selectBaby(id));
        }
    })
)(Baby)
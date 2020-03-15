import {v4 as uuidv4} from 'uuid';
import React, {useState, Fragment} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import * as actions from '../../actions/babies'
const AddBabyForm = ({onSubmit}) => {
    const [name, changeName] = useState('');
    const [lastName, changeLastName] = useState('');
    return(
        <Fragment>
            <input
                type = 'text'
                placeholder ='Juanito'
                value = {name}
                onChange = {e => changeName(e.target.value)}
            />
            <input
                type = 'text'
                placeholder ='Perez'
                value = {lastName}
                onChange = {e => changeLastName(e.target.value)}
            />
            <Link to='/babies'>
                <button type = 'submit' onClick = {
                    () => onSubmit(name, lastName)
                }>
                    {'Agregar'}
                </button>
            </Link>
            
        </Fragment>
    );
}

export default connect(
    undefined,
    dispatch =>({
        onSubmit(name, lastName){
            dispatch(actions.addBaby(uuidv4(),name,lastName))
        }
    })
)(AddBabyForm)
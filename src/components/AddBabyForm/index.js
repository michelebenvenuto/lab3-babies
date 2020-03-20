import {v4 as uuidv4} from 'uuid';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import * as actions from '../../actions/babies'
import './styles.css'

const AddBabyForm = ({onSubmit}) => {
    const [name, changeName] = useState('');
    const [lastName, changeLastName] = useState('');
    return(
        <div className = 'form-wrapper'>
            <div className = 'title'>
                {'Nuevo bebe'}
            </div>
            <input
                type = 'text'
                placeholder ='Nombre'
                value = {name}
                onChange = {e => changeName(e.target.value)}
            />
            <input
                type = 'text'
                placeholder ='Apellido'
                value = {lastName}
                onChange = {e => changeLastName(e.target.value)}
            />
            <Link to='/babies'>
                <button className='add-baby' type = 'submit' onClick = {
                    () => onSubmit(name, lastName)
                }>
                    {'Agregar'}
                </button>
            </Link>
            
        </div>
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
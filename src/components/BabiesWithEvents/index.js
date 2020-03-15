import React from 'react';

import './styles.css'
import Babies from '../babies';
import EventsOfBaby from '../EventsOfBaby';

const BabiesWithEvents = () =>(
    <div className= 'baby-events-container'>
        <Babies/>
        <EventsOfBaby/>
    </div>
)

export default BabiesWithEvents
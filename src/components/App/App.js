import React from 'react';
import {Provider} from 'react-redux';

import {configureStore} from '../../store';
import Babies from '../babies';
import AddEventToBaby from '../AddEventToBaby'
import AddBabyForm from '../AddBabyForm';
const store = configureStore();

const App = () =>(
  <Provider store = {store}>
    <Babies/>
    <AddBabyForm/>
    <AddEventToBaby/>
  </Provider>
);

export default App;

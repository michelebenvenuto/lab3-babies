import {createStore} from 'redux';

import reducer from './reducers'

export const configureStore = () =>{
    const store = createStore(reducer)
    const printSate = () => {
        console.log(store.getState())
    }
    store.subscribe(printSate)
    return store ;
}
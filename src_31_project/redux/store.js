import { applyMiddleware, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducers from './reducers'
import counter from './reducers/counter'

const logger = store => next => action =>{
    if(typeof action === 'function') {
        console.log('dispatch a function');
    }else {
        console.log('dispatching ', action);
    }
    const result = next(action);
    console.log('state: ', store.getState());
    return result;
}

const store = configureStore({
    reducer: {
        counter: counter
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;
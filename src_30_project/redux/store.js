import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

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

const middleWare = [thunk, logger]

const store = createStore(
    reducer,
    applyMiddleware(...middleWare)
)

export default store;
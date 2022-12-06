import actionTypes from './actionTypes'

export const increment = (val) => {
    return {
        type: actionTypes.COUNTER_INCREMENT,
        payload: val
    }
}

export const decrement = (val) => {
    return {
        type: actionTypes.COUNTER_DECREMENT,
        payload: val
    }
}
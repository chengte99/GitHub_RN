import actionTypes from './actionTypes'

export const loginSuccess = (userInfo) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: userInfo
    }
}

export const loginFailed = () => {
    return {
        type: actionTypes.LOGIN_FAILED,
    }
}

export const logout = () => dispatch => {
    dispatch(loginFailed())
}
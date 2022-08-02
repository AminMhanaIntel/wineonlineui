import * as authActionTypes from './authActionTypes';

export const authSuccess = (userInfo) => {
    return {
        type: authActionTypes.AUTH_SUCCESS,
        userInfo: userInfo
    }
}

export const signup = (userInfo) => {
    return authSuccess(userInfo);
}

export const logout = () => {
    localStorage.removeItem('userInfo');
    return {
        type: authActionTypes.AUTH_LOGOUT,
        userInfo: null
    }
}

export const authSignup = (userInfo) => {
    return dispatch => {
        const jsonUserInfo = JSON.stringify(userInfo);
        localStorage.setItem('userInfo', jsonUserInfo);
        dispatch(signup(userInfo));
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: authActionTypes.SET_AUTH_REDIRECT_PATH,
        authRedirectPath: path
    }
}

export const authCheck = () => {
    return dispatch => {
        const userInfo = localStorage.getItem('userInfo');
        if(!userInfo){
            dispatch(logout());
        }
        else{
            const userInfo = localStorage.getItem('userInfo');
            dispatch(authSuccess(JSON.parse(userInfo)));
        }
    }
}


import * as authActionTypes from '../actions/AuthActions/authActionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    userInfo: null,
    // token: null,
    // error: null,
    // loading: false,
    authRedirectPath: '/'
}

const authSuccess = (state, action) => {
    return updateObject( state, {
        userInfo: action.userInfo
    });
}

const authLogout = (state, action) => {
    return updateObject( state, {
        userInfo: null
    });
}

const setAuthRedirectPath = (state, action) => {
    return updateObject( state, {
        authRedirectPath: action.authRedirectPath
    });
}

const authReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case authActionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case authActionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case authActionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
        default:
            return state;
    }
}

export default authReducer;
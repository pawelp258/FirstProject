import * as actions from '../actions/actionTypes'

const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                authError: null
            }
        case actions.LOGIN_ERROR:
            return {
                ...state,
                authError: action.message
            }
        case actions.SIGNOUT_SUCCESS:
            return {
                ...state,
                authError: null
            }
        case actions.SIGNUP_SUCCESS:
            return {
                ...state,
                authError: null
            }
        case actions.SIGNUP_ERROR:
            return{
                ...state,
                authError: action.error
            }
        case actions.UPDATE_PROFILE_SUCCESS:
            return{
                ...state,
                authError: null
            }
        case actions.UPDATE_PROFILE_FAILED:
            return{
                ...state,
                authError:null
            }
        return {
            ...state
        }
        default:
            return state;
    }
}

export default authReducer;
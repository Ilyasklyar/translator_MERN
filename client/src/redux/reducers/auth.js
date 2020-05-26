import { AUTH_SUCCESS, AUTH_LOGOUT, USER_CREATE_SUCCESS } from "../actions/actionTypes"

const inicialState = {
    token: null,
    userId: null
}

export default function authReducer(state = inicialState, action) {
    
    switch(action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, token: action.token, userId: action.userId
            }
        case AUTH_LOGOUT:
            return {
                ...state, token: null, userId: null
            }
        case USER_CREATE_SUCCESS:
            return {
                ...state, token: action.data.token, userId: action.data.userId
            }
        default:
            return state
    }
}
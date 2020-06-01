import { AUTH_SUCCESS, AUTH_LOGOUT, USER_CREATE_SUCCESS, USER_ERROR } from "../actions/actionTypes"

const inicialState = {
    token: null,
    userId: null,
    message: null
}

export default function authReducer(state = inicialState, action) {
    
    switch(action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, token: action.token, userId: action.userId, message: null
            }
        case AUTH_LOGOUT:
            return {
                ...state, token: null, userId: null, message: null
            }
        case USER_CREATE_SUCCESS:
            return {
                ...state, token: action.data.token, userId: action.data.userId, message: null
            }
        case USER_ERROR:
                return {
                    ...state, message: action.message
                }
        default:
            return state
    }
}
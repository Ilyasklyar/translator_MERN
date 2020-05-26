import { combineReducers } from 'redux'
import authReducer from './auth'
import translateReducer from './translate'
import vocabularyReducer from './vocabulary'

export default combineReducers({
    auth: authReducer,
    translate: translateReducer,
    vocabulary: vocabularyReducer
})
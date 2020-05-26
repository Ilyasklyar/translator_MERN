import { GET_WORDS_VOCABULARY } from "../actions/actionTypes"

const inicialState = {
    list: []
}

export default function vocabularyReducer(state = inicialState, action) {
    
    switch(action.type) {
       
        case GET_WORDS_VOCABULARY: 
            return {
                ...state, list: action.data
            }
        default:
            return state
    }
}
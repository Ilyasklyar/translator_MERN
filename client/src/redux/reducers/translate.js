import { WORD_TRANSLATE, WORD_TRANSLATE_ADD } from "../actions/actionTypes"

const inicialState = {
    word: ''
}

export default function translateReducer(state = inicialState, action) {
    
    switch(action.type) {
       
        case WORD_TRANSLATE: 
            return {
                ...state, word: action.data.text
            }
        case WORD_TRANSLATE_ADD: 
            return {
                ...state, word: action.data.text
            }
        default:
            return state
    }
}
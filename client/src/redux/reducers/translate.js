import { WORD_TRANSLATE, 
    WORD_TRANSLATE_ADD, 
    CHOOSE_LANGUAGE_ON, 
    CLOSE_LANGUAGE_MODAL, 
    SET_LANGUAGE_FROM,
    SET_LANGUAGE_TO } from "../actions/actionTypes"

const inicialState = {
    word: '',
    languages: null,
    languageFrom: 'Английский',
    languageFromKey: 'en',
    languageTo: 'Русский',
    languageToKey: 'ru',
    languageToSet: null
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
        case CHOOSE_LANGUAGE_ON: 
            return {
                ...state, languages: Object.assign({}, action.data), languageToSet: action.languageToSet
            }
        case CLOSE_LANGUAGE_MODAL: 
            return {
                ...state, languages: null
            }
        case SET_LANGUAGE_FROM: 
            return {
                ...state, languageFrom: action.languageFrom, languageFromKey: action.languageFromKey, languages: null
            }
        case SET_LANGUAGE_TO: 
            return {
                ...state, languageTo: action.languageTo, languageToKey: action.languageToKey, languages: null
            }
        default:
            return state
    }
}
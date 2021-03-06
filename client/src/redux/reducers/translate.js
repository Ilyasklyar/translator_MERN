import { WORD_TRANSLATE, 
    WORD_TRANSLATE_ADD, 
    CHOOSE_LANGUAGE_ON, 
    CLOSE_LANGUAGE_MODAL, 
    SET_LANGUAGE_FROM,
    SET_LANGUAGE_TO,
    CLEAR_MESSAGE,
    WORD_TRANSLATE_CLEAR,
    TRANSLATE_START } from "../actions/actionTypes"

const inicialState = {
    word: '',
    languages: null,
    languageFrom: 'Английский',
    languageFromKey: 'en',
    languageTo: 'Русский',
    languageToKey: 'ru',
    languageToSet: null,
    addMessageSuccess: '',
    loader: false
}

export default function translateReducer(state = inicialState, action) {
    
    switch(action.type) {

        case TRANSLATE_START: 
            return {
                ...state, loader: true
            }
        case WORD_TRANSLATE: 
            return {
                ...state, loader: false, word: action.data.text
            }
        case WORD_TRANSLATE_ADD: 
            return {
                ...state, loader: false, addMessageSuccess: action.data.message
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
        case CLEAR_MESSAGE: 
            return {
                ...state, addMessageSuccess: null
            }
        case WORD_TRANSLATE_CLEAR: 
            return {
                ...state, word: ''
            }
        default:
            return state
    }
}
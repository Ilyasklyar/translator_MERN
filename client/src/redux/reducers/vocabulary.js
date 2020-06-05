import { GET_WORDS_VOCABULARY, CLEAR_PAGE_VOC } from "../actions/actionTypes"

const inicialState = {
    list: [],
    nextPage: null,
    previousPage: null,
    page: 1,
    countItem: null,
    limit: 5
}

export default function vocabularyReducer(state = inicialState, action) {
    
    switch(action.type) {
        case GET_WORDS_VOCABULARY:  
            return {
                ...state, 
                list: action.data.results, 
                page: action.data.page.page, 
                nextPage: action.data.next.page, 
                previousPage: action.data.previous.page,
                countItem: action.data.countItem,
            }
            case CLEAR_PAGE_VOC:  
             console.log('wwww',inicialState.page)
            return {
               
                ...state,  
                nextPage: null, 
                previousPage: null,
                countItem: null,
            }
        default:
            return state
    }
}
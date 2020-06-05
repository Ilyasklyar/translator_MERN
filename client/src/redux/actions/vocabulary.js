export const getWordVocabularySuccess = data => {
 
    return {
        type: "GET_WORDS_VOCABULARY",
        data
    }
}


export const getWordVocabulary = (token, pageNumb, limit) => {
    return (dispatch) => {

        fetch(`/api/vocabulary?page=${pageNumb}&limit=${limit}`,
        {
            method: 'GET',
            headers: { 
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
             }
        } )

        .then(response => response.json()) 

        .then(data => dispatch(getWordVocabularySuccess(data)))
    }
}

export const deleteListItem = (id, token, pageNumb, limit) => {

    return (dispatch) => {
        fetch('/api/vocabulary/delete',
        {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: { 
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
             }
        } )
        .then(response => response.json()) 

     dispatch(getWordVocabulary(token, pageNumb, limit))
    }
}


export const clearPageVoc = () => {
 
    return {
        type: "CLEAR_PAGE_VOC"
    }
}


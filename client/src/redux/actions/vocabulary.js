export const getWordVocabularySuccess = (data) => {
 
    return {
        type: "GET_WORDS_VOCABULARY",
        data
    }
}


export const getWordVocabulary = token => {
    return (dispatch) => {

        fetch('/api/vocabulary',
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

export const deleteListItem = (id,token) => {

    console.log(token)
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

     dispatch(getWordVocabulary(token))
    }
}



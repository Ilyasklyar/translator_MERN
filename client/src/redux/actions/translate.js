export const wordTranslateSuccess = (data) => {
 
    return {
        type: "WORD_TRANSLATE",
        data
    }
}
export const wordTranslateAddSuccess = (data) => {
 console.log(data)
    return {
        type: "WORD_TRANSLATE_ADD",
        data
    }
}



export const wordTranslate =  word => {
    return (dispatch) => {
        fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200523T202929Z.c0d9bff113571534.5665160ed554eb71878786b8b8c0080d43e2532a&text=${word}&lang=en-ru`)

        .then(response => response.json()) 

        .then(data => dispatch(wordTranslateSuccess(data)))
    }
}

export const wordTranslateAdd =  (text,wordTranslate,token) => {
    return (dispatch) => {
        fetch('/api/vocabulary/add',
        {
            method: 'POST',
            body: JSON.stringify({ text, wordTranslate }),
            headers: { 
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
             }
        } )
        .then(response => response.json()) 

        .then(data => dispatch(wordTranslateAddSuccess(data)))
    }
}

export const wordTranslateSuccess = data => {
 
    return {
        type: "WORD_TRANSLATE",
        data
    }
}
export const wordTranslateAddSuccess = data => {
    return {
        type: "WORD_TRANSLATE_ADD",
        data
    }
}



export const wordTranslate =  (word, languageFromKey, languageToKey) => {
    return (dispatch) => {
        fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200523T202929Z.c0d9bff113571534.5665160ed554eb71878786b8b8c0080d43e2532a&text=${word}&lang=${languageFromKey}-${languageToKey}`)

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

export const chooseLanguageApi =  languageToSet => {
    return (dispatch) => {

    const data = {
        en: "Английский",
        af: "Африкаанс",
        am: "Амхарский",
        ar: "Арабский",
        az: "Азербайджанский",
        ba: "Башкирский",
        be: "Белорусский",
        bg: "Болгарский",
        bn: "Бенгальский",
        bs: "Боснийский",
        ca: "Каталанский",
        ceb: "Себуанский",
        cs: "Чешский",
        cv: "Чувашский",
        cy: "Валлийский",
        da: "Датский",
        de: "Немецкий",
        el: "Греческий",
        eo: "Эсперанто",
        es: "Испанский",
        et: "Эстонский",
        eu: "Баскский",
        fa: "Персидский",
        fi: "Финский",
        fr: "Французский",
        ga: "Ирландский",
        gd: "Шотландский (гэльский)",
        gl: "Галисийский",
        gu: "Гуджарати",
        he: "Иврит",
        hi: "Хинди",
        hr: "Хорватский",
        ht: "Гаитянский",
        hu: "Венгерский",
        hy: "Армянский",
        id: "Индонезийский",
        is: "Исландский",
        it: "Итальянский",
        ja: "Японский",
        jv: "Яванский",
        ka: "Грузинский",
        kk: "Казахский",
        km: "Кхмерский",
        kn: "Каннада",
        ko: "Корейский",
        ky: "Киргизский",
        la: "Латынь",
        lb: "Люксембургский",
        lo: "Лаосский",
        lt: "Литовский",
        lv: "Латышский",
        mg: "Малагасийский",
        mhr: "Марийский",
        mi: "Маори",
        mk: "Македонский",
        ml: "Малаялам",
        mn: "Монгольский",
        mr: "Маратхи",
        mrj: "Горномарийский",
        ms: "Малайский",
        mt: "Мальтийский",
        my: "Бирманский",
        ne: "Непальский",
        nl: "Нидерландский",
        no: "Норвежский",
        pa: "Панджаби",
        pap: "Папьяменто",
        pl: "Польский",
        pt: "Португальский",
        ro: "Румынский",
        ru: "Русский",
        sah: "Якутский",
        si: "Сингальский",
        sk: "Словацкий",
        sl: "Словенский",
        sq: "Албанский",
        sr: "Сербский",
        su: "Сунданский",
        sv: "Шведский",
        sw: "Суахили",
        ta: "Тамильский",
        te: "Телугу",
        tg: "Таджикский",
        th: "Тайский",
        tl: "Тагальский",
        tr: "Турецкий",
        tt: "Татарский",
        udm: "Удмуртский",
        uk: "Украинский",
        ur: "Урду",
        uz: "Узбекский",
        vi: "Вьетнамский",
        xh: "Коса",
        yi: "Идиш",
        zh: "Китайский",
    }

    dispatch(chooseLanguageOn(data, languageToSet))
    }
}


export const chooseLanguageOn = (data, languageToSet) => {
    return {
        type: "CHOOSE_LANGUAGE_ON",
        data,
        languageToSet
    }
}

export const closeLanguageModal = () => {
    return {
        type: "CLOSE_LANGUAGE_MODAL",
    }
}

export const setLanguageFrom = (languageFrom, languageFromKey) => {
    return {
        type: "SET_LANGUAGE_FROM",
        languageFrom,
        languageFromKey
    }
}

export const setLanguageTo = (languageTo, languageToKey) => {
    return {
        type: "SET_LANGUAGE_TO",
        languageTo,
        languageToKey
    }
}

export const clearMessage = () => {
    return {
        type: "CLEAR_MESSAGE",
    }
}

export const wordTranslateClearState = () => {
    return {
        type: "WORD_TRANSLATE_CLEAR",
    }
}




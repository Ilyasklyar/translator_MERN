import React from 'react'

export const ModalLang = props => {
    const langArray = Object.values(props.languages)

    const onSetLanguage = (language) => {
        let languageKey
        for (let key in props.languages) {
            if (props.languages[key] === language) {
                languageKey = key
            }
        }
        if (props.languageToSet) {
            props.setLanguageTo(language, languageKey)
        } else {
            props.setLanguage(language, languageKey)
        }

    }

    const langList = () => {
        return (langArray.map((item, index) => (
            <li key={index} >
                <span onClick={() => onSetLanguage(item)} >{item}</span>
            </li>
        ))
        )
    }

    const onCloseModal = () => {
        props.closeModal()
    }

    if (props.languages) {
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Выберите язык</h4>

                    <ul>
                        {langList()}
                    </ul>

                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={onCloseModal}>Закрыть</a>
                </div>
            </div>
        )
    } else {
        return
    }

}
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { wordTranslate, wordTranslateAdd, chooseLanguageApi, closeLanguageModal, setLanguageFrom, setLanguageTo } from '../../redux/actions/translate'
import { ModalLang } from '../ModalLang/ModalLang'



const Translate = props => {

    const [text, setForm] = useState('')

    const onChangeHandler = event => {
        setForm({
            text: event.target.value
        })
    }

    useEffect(() => {
        window.M.updateTextFields()
    }, [])


    const onClickTranslate = (event) => {
        event.preventDefault();
        let word = Object.values(text)
        props.translate(word, props.languageFromKey, props.languageToKey)
    }

    const onClickAdd = (event) => {
        event.preventDefault()
        props.addToVocabulary(Object.values(text).join(''), ...props.wordTranslate, props.token)
    }

    let languageToSet

    const onChooseLanguage = () => {
        languageToSet = false
        props.getLanguage(languageToSet)
    }

    const onChooseLanguageTo = () => {
        languageToSet = true
        props.getLanguage(languageToSet)
    }

    return (
        <>
            <div>
                <h1>Перевод текста</h1>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <textarea
                                    id="textarea1"
                                    className="materialize-textarea"
                                    data-length="520"
                                    name="text"
                                    placeholder="Введите текс"
                                    value={text.text}
                                    onChange={onChangeHandler}
                                ></textarea>
                                <label htmlFor="textarea2" onClick={onChooseLanguage}>{props.languageFrom}</label>
                            </div>
                            <div className="input-field col s6">
                                <textarea
                                    id="textarea2"
                                    className="materialize-textarea"
                                    data-length="520"
                                    name="text2"
                                    placeholder="Перевод"
                                    value={props.wordTranslate}
                                    disabled="disabled"
                                ></textarea>
                                <label htmlFor="textarea2" onClick={onChooseLanguageTo}>{props.languageTo}</label>
                            </div>
                        </div>

                        <div className="wraper-btn">
                            <button
                                className="btn waves-effect waves-light"
                                type="submit"
                                name="action"
                                onClick={onClickTranslate}
                            >Перевести</button>

                            <button
                                className="btn waves-effect waves-light"
                                type="submit"
                                name="action"
                                onClick={onClickAdd}
                            >Добавить в словарь</button>
                        </div>
                    </form>
                </div>
            </div>
            {
                props.languages ?
                    <ModalLang
                        languages={props.languages}
                        closeModal={props.closeModal}
                        setLanguage={props.setLanguage}
                        setLanguageTo={props.setLanguageTo}
                        languageToSet={props.languageToSet}
                    />
                    : null
            }
        </>
    )
}
const mapStateToProps = state => {
    return {
        wordTranslate: state.translate.word,
        token: state.auth.token,
        languages: state.translate.languages,
        languageFrom: state.translate.languageFrom,
        languageTo: state.translate.languageTo,
        languageToSet: state.translate.languageToSet,
        languageFromKey: state.translate.languageFromKey,
        languageToKey: state.translate.languageToKey,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        translate: (word, languageFromKey, languageToKey) => dispatch(wordTranslate(word, languageFromKey, languageToKey)),
        addToVocabulary: (text, wordTranslate, token) => dispatch(wordTranslateAdd(text, wordTranslate, token)),
        getLanguage: languageToSet => dispatch(chooseLanguageApi(languageToSet)),
        closeModal: () => dispatch(closeLanguageModal()),
        setLanguage: (languageFrom, languageFromKey) => dispatch(setLanguageFrom(languageFrom, languageFromKey)),
        setLanguageTo: (languageTo, languageToKey) => dispatch(setLanguageTo(languageTo, languageToKey)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Translate)
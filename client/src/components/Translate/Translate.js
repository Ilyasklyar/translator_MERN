import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
    wordTranslate, wordTranslateAdd, chooseLanguageApi, closeLanguageModal,
    setLanguageFrom, setLanguageTo, clearMessage, wordTranslateClearState, loaderGet
} from '../../redux/actions/translate'
import { ModalLang } from '../ModalLang/ModalLang'
import { Message } from '../Message/Message'
import { Loader } from '../Loader/Loader'



const Translate = props => {

    const [text, setForm] = useState('')

    const onChangeHandler = event => {
        setForm({
            text: event.target.value
        })
    }

    const wordTranslateClear = props.wordTranslateClear

    useEffect(() => {
        window.M.updateTextFields()
        wordTranslateClear()
    }, [wordTranslateClear])


    const onClickTranslate = (event) => {
        event.preventDefault();
        let word = Object.values(text)
        props.loaderTo()
        props.translate(word, props.languageFromKey, props.languageToKey)
    }

    const onClickAdd = (event) => {
        event.preventDefault()
        props.loaderTo()
        props.addToVocabulary(Object.values(text).join(''), ...props.wordTranslate, props.token)
        setTimeout(() => {
            props.clearMessage()
        }, 5000)
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
                                <label htmlFor="textarea2" onClick={onChooseLanguage}>{props.languageFrom} 	&#9660;</label>
                            </div>
                            <div className="input-field col s6">
                                <div>
                                    <span className="textTitileTranslate" onClick={onChooseLanguageTo}>{props.languageTo} 	&#9660;</span>
                                    <div className="textTranslate">
                                        {
                                            props.wordTranslate ?
                                                <span>{props.wordTranslate}</span>
                                                : <span>Перевод</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            props.addMessageSuccess ?
                                <Message addMessageSuccess={props.addMessageSuccess} />
                                : null
                        }
                        <div className="wraper-btn">
                            <button
                                className="btn-large waves-effect waves-light"
                                type="submit"
                                name="action"
                                onClick={onClickTranslate}
                            >Перевести</button>

                            <button
                                className="btn-large waves-effect waves-light"
                                type="submit"
                                name="action"
                                disabled={props.wordTranslate ? null : "disabled"}
                                onClick={onClickAdd}
                            >Добавить в словарь</button>
                        </div>
                    </form>
                </div>
            </div>
            {
                props.loader ? 
                <Loader />
                : null
            }
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
        addMessageSuccess: state.translate.addMessageSuccess,
        loader: state.translate.loader,
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
        clearMessage: () => dispatch(clearMessage()),
        wordTranslateClear: () => dispatch(wordTranslateClearState()),
        loaderTo: () => dispatch(loaderGet())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Translate)
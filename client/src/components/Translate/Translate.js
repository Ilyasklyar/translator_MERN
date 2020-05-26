import React, { useState } from 'react'
import { connect } from 'react-redux'
import { wordTranslate, wordTranslateAdd } from '../../redux/actions/translate'


const Translate = props => {


    const [text, setForm] = useState('')

    const onChangeHandler = event => {
        setForm({
            text: event.target.value
        })
    }
  
  

    const onClickTranslate = (event) => {
        event.preventDefault();
        props.translate(Object.values(text))
          console.log('www',Object.values(text));
    }

    const onClickAdd = (event) => {
        event.preventDefault()
        props.addToVocabulary(Object.values(text).join(''), ...props.wordTranslate, props.token)
    }

    return (
        <div>
            <h1>Перевод текста</h1>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <textarea
                                id="textarea1"
                                className="materialize-textarea"
                                data-length="120"
                                name="text"
                                placeholder="Введите текс"
                                value={text.text}
                                onChange={onChangeHandler}
                            ></textarea>
                            <label htmlFor="textarea2">Английский язык</label>
                        </div>
                        <div className="input-field col s6">
                            <textarea
                                id="textarea2"
                                className="materialize-textarea"
                                data-length="120"
                                name="text2"
                                placeholder="Перевод"
                                value={props.wordTranslate}
                                disabled="disabled"
                            ></textarea>
                            <label htmlFor="textarea2">Русский язык</label>
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
    )
}
const mapStateToProps = state => {
    return {
        wordTranslate: state.translate.word,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        translate: word => dispatch(wordTranslate(word)),
        addToVocabulary: (text,wordTranslate,token) => dispatch(wordTranslateAdd(text,wordTranslate,token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Translate)
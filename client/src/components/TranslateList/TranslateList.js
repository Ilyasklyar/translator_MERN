import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TranlateListItem } from '../TranslateListItem/TranslateListItem'
import { getWordVocabulary, deleteListItem } from '../../redux/actions/vocabulary';


const TranlateList =  props => {
 
    useEffect(
        () => {
            props.getText(props.token)
        },
        []
      );
    return (
        <div>
            <ul>
                {props.list.map( (item) => (
                    <TranlateListItem key={item._id} id={item._id} 
                    textInput={item.textInput} 
                    textTranslate={item.textTranslate} 
                    deleteItem={props.deleteItem}
                    token={props.token}
                    />
                ))}  
            </ul>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        list: state.vocabulary.list,
        token: state.auth.token
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        getText: (token) => dispatch(getWordVocabulary(token)),
        deleteItem: (id,token) => dispatch(deleteListItem(id,token))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TranlateList)
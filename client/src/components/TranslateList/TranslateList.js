import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TranlateListItem } from '../TranslateListItem/TranslateListItem'
import { getWordVocabulary, deleteListItem } from '../../redux/actions/vocabulary';


const TranlateList = props => {

    useEffect(
        () => {
            props.getText(props.token, props.page, props.limit)
        },
        []
    );

    const onChangePage = (pageNumb) => {
        props.getText(props.token, pageNumb, props.limit)
    }

    return (
        <div>
            <TranlateListItem list={props.list}
                deleteItem={props.deleteItem}
                token={props.token}
                page={props.page}
                limit={props.limit}
            />
            <ul className="pagination">

                {
                    (props.previousPage > 0) ?
                        <li className="waves-effect">
                            <a href="#!" onClick={() => onChangePage(props.previousPage)}>
                                <i className="material-icons">&laquo;</i>
                            </a>
                        </li>
                        :
                        <li className="disabled">
                            <a href="#!">
                                <i className="material-icons">&laquo;</i>
                            </a>
                        </li>
                }

                <li className="active"><a href="#!">{props.page}</a></li>
                {
                   ( props.page === Math.ceil((props.countItem/props.limit))) ?
                   <li className="disabled">
                       <a href="#!">
                           <i className="material-icons">&raquo;</i>
                        </a>
                    </li>
                    :
                    <li className="waves-effect">
                        <a href="#!" onClick={() => onChangePage(props.nextPage)}>
                            <i className="material-icons">&raquo;</i>
                        </a>
                    </li>
                }
               
            </ul>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        list: state.vocabulary.list,
        token: state.auth.token,
        page: state.vocabulary.page,
        nextPage: state.vocabulary.nextPage,
        previousPage: state.vocabulary.previousPage,
        countItem: state.vocabulary.countItem,
        limit: state.vocabulary.limit,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getText: (token, pageNumb, limit) => dispatch(getWordVocabulary(token, pageNumb, limit)),
        deleteItem: (id, token, pageNumb, limit) => dispatch(deleteListItem(id, token, pageNumb, limit)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TranlateList)
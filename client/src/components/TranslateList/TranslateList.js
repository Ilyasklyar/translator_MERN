import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TranlateListItem } from '../TranslateListItem/TranslateListItem'
import { getWordVocabulary, deleteListItem, loaderGetVoc } from '../../redux/actions/vocabulary';
import { Loader } from '../Loader/Loader';


const TranlateList = props => {

    let getTextEff = props.getText
    let tokenEff = props.token
    let pageEff = props.page
    let limitEff = props.limit
    const loaderTo = props.loaderTo

    useEffect(
        () => {
            loaderTo()
            getTextEff(tokenEff, pageEff, limitEff)
        },
        [getTextEff, tokenEff, pageEff, limitEff, loaderTo]
    );

    const onChangePage = (pageNumb) => {
        loaderTo()
        props.getText(props.token, pageNumb, props.limit)
    }

    return (
        <div>
            {
                props.loader ?
                    <Loader />
                    :

                    <TranlateListItem list={props.list}
                        deleteItem={props.deleteItem}
                        token={props.token}
                        page={props.page}
                        limit={props.limit}
                    />}
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
                    (props.page === Math.ceil((props.countItem / props.limit))) ?
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
        loader: state.translate.loader,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getText: (token, pageNumb, limit) => dispatch(getWordVocabulary(token, pageNumb, limit)),
        deleteItem: (id, token, pageNumb, limit) => dispatch(deleteListItem(id, token, pageNumb, limit)),
        loaderTo: () => dispatch(loaderGetVoc())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TranlateList)
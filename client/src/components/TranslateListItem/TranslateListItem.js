import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


export const TranlateListItem = props => {

    return (
        <TransitionGroup component='ul' transitionName="example">
            {
                props.list.map((item) => (
                    <CSSTransition
                        key={item._id}
                        classNames={"item"}
                        timeout={1500}
                    >
                        <li>
                            <div className='wrap--list-item'>
                                <span>{item.textInput}</span>
                                <span> {item.textTranslate}</span>
                                <button href="#" className="btn-floating btn-large waves-effect waves-light red"
                                    onClick={() => props.deleteItem(item._id, props.token, props.page, props.limit)}>
                                    <i className="material-icons">&times;</i>
                                </button>
                            </div>
                        </li>
                    </CSSTransition>
                )
                )
            }
        </TransitionGroup>
    )
}


import React from 'react'


export const TranlateListItem = props => {

    return (
        <ul>
            {
                props.list.map((item, index) => {
                    return (
                        <li key={index} >
                            <div className='wrap--list-item'>
                                <span>{item.textInput}</span>
                                <span> {item.textTranslate}</span>
                                <button href="#" className="btn-floating btn-large waves-effect waves-light red"
                                    onClick={() => props.deleteItem(item._id, props.token, props.page, props.limit)}>
                                    <i className="material-icons">&times;</i>
                                </button>
                            </div>
                        </li>
                    )
                }
                )
            }
        </ul>

    )
}


import React from 'react'


export const TranlateListItem = props => {

    return (
    <li>
        <div className='wrap--list-item'>
            <span>{props.textInput}</span>
            <span> {props.textTranslate}</span>
            <button href="#" className="btn-floating btn-large waves-effect waves-light red" onClick={()=>props.deleteItem(props.id,props.token)}><i class="material-icons">&times;</i></button> 
        </div> 
    </li>
    )
}


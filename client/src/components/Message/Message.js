import React from 'react'

export const Message = props => {
    return (
        <div className="row">
            <div className="input-field col s12">
                {
                    props.addMessageSuccess ?
                        <div className="message">
                            {props.addMessageSuccess}
                        </div>
                        :
                        <div className="message-error">
                            {props.message}
                        </div>
                }
            </div>
        </div>
    )
}
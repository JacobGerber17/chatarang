import React from 'react'

const Message = (props) => {
    return (
        <div className="Message" style={styles.message}>
            <div
                classList="Avatar"
            ></div>
            <div classList="details" style={styles.details}>
                <div classList="Metadata">
                    <div classList="user">{props.message.userName}</div>
                    <div classList="time">1:10 PM</div>
                </div>
                <div classList="body">
                    {props.message.body}
                </div>
            </div>
            :
        </div>
    )
}

const styles = {
    message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '0 1rem',
    },

    details: {
        flex: '1',
        paddingLeft: '0.5rem',
    }
}

export default Message
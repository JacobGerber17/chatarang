import React from 'react'
import Avatar from './Avatar';
import Metadata from './Metadata'

const Message = (props) => {
    return (
        <div className="Message" style={styles.message}>
            <Avatar email={props.message.email}/>
            <div classList="details" style={styles.details}>
                <Metadata username={props.message.userName}/>
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
import React from 'react'

const Avatar = (props) => {
    return (
        <div class="Metadata" style={styles.metadata}>
              <div class="user" style={styles.user}>{props.username}</div>
              <div class="time" style={styles.time}>1:10 PM</div>
        </div>
    )
}

export default Avatar

const styles = {
    metadata: {
        display: 'flex',
        alignItems: 'baseline',
    }, 

    user: {
        marginRight: '0.5rem',
    },

    time: {
        color: '#999',
        fontSize: '0.8rem',
    },
}
  
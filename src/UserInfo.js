import React from 'react'

const UserInfo = (props) => {
    return (
        <div className="UserInfo" style={{...props.style, ...styles.info}}>
            <div className="Avatar" style={styles.avatar}></div>
            <div className="user" style={styles.user}>{props.userName}</div>
            <a href="#" style={styles.a}>
                <i className="fas fa-sign-out-alt"></i>
            </a>
        </div>
    )
}

export default UserInfo

const styles = {
    info: {
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
    },

    avatar: {
        marginRight: '0.5rem',
    },

    user: {
        flex: 1,
    },

    a: {
        border: 0,
        padding: 0,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.2rem',
        transition: 'color 0.25s ease-out',
    }
}
import React from 'react'
import Avatar from './Avatar';
import Signout from './Signout';

const UserInfo = (props) => {
    return (
        <div className="UserInfo" style={{...props.style, ...styles.info}}>
            <Avatar style={styles.avatar} email={props.user.email} />
            <div className="user" style={styles.user}>{props.user.userName}</div>
            <Signout style={styles.a} signOut={props.signOut}/>
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
import React from 'react'

const Signout = (props) => {
    return (
        <button style={props.style} onClick={props.signOut}>
            <i className="fas fa-sign-out-alt"></i>
        </button>
    )
}

export default Signout
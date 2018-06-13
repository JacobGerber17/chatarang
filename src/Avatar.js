import React from 'react'

const Avatar = (props) => {
    return (
        <div classList="Avatar" style={{
        ...styles,
        ...props.style,
        background: `url(https://api.adorable.io/avatars/40/${props.email}`}}>
        
        </div>
    )
}

export default Avatar

const styles = {
    height: '40px',
    width: '40px',
    fontSize: '1rem',
    borderRadius: '20px',
}
import React, { Component } from 'react'

import Sidebar from './Sidebar';
import Chat from './Chat';

class Main extends Component {
    render(){
        return(
            <div className="Main" style={styles}>
                <Sidebar user={this.props.user} signOut={this.props.signOut} setChannel={this.props.setChannel}/>
                <Chat user={this.props.user} channel={this.props.channel}/>
            </div>
        )
    }
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}

export default Main
import React, { Component } from 'react'

import Sidebar from './Sidebar';
import Chat from './Chat';

import base from './base'

class Main extends Component {
    state = {
        channel: {
            name: 'general',
            description: 'Announcements and general chat',
        }
    }

    setChannel = (channel) => {
        this.setState({ channel })
      }
    
    render(){
        return(
            <div className="Main" style={styles}>
                <Sidebar user={this.props.user} signOut={this.props.signOut} setChannel={this.setChannel}/>
                <Chat user={this.props.user} channel={this.state.channel}/>
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
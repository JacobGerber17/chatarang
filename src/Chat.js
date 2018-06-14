import React, { Component } from 'react'

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

import base from './base'

class Chat extends Component {
    constructor(){
        super()

        this.state = {
            messages: [],
        }
    }

    componentWillMount(){
        base.syncState(`${this.props.channel.name}/messages`, {
            context: this,
            state: 'messages',
            asArray: true,
        })
    }

    

    addMessage = (body) => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(),
            userName: this.props.user.userName,
            body: body,
            email: this.props.user.email
        })

        this.setState({messages})
    }

    render(){
        return(
            <div className="Chat" style={styles}>
                <ChatHeader channel={this.props.channel}/>
                <MessageList messages={this.state.messages} channel={this.props.channel}/>
                <MessageForm addMessage={this.addMessage} />
            </div>
        )
    }
}

const styles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
}
export default Chat
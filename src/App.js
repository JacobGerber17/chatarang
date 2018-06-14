import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import Login from './Login';

import base from './base'

class App extends Component {
  state = {
    user: {
      uid: '',
      userName: '',
      email: '',
    },

    channel: 'general'
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user){
      this.setState({ user })
    }
  }

  signedIn = () => {
    return this.state.user.uid
  }

  login = (user) => {
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  signOut = () => {
    this.setState({ user: {
      uid: '',
      userName: '',
      email: '',
    }})
    localStorage.removeItem('user')
  }

  setChannel = (channel) => {
    this.setState({ channel })

    base.syncState(`${channel}/messages`, {
      context: this,
      state: 'messages',
      asArray: true,
  })
  }

  render() {
    return (
      <div className="App">
        {this.signedIn() 
        ? <Main 
            user={this.state.user} 
            signOut={this.signOut} 
            channel={this.state.channel} 
            setChannel={this.setChannel}/> 
        : <Login 
            login={this.login} />}
      </div>
    );
  }
}

export default App;

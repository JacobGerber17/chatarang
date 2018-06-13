import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import Login from './Login';

class App extends Component {
  state = {
    user: {
      uid: '',
      userName: '',
      email: '',
    }
  }

  signedIn = () => {
    return this.state.user.uid
  }

  login = (user) => {
    this.setState({ user })
  }

  signOut = () => {
    this.setState({ user: {
      uid: '',
      userName: '',
      email: '',
    }})
  }

  render() {
    return (
      <div className="App">
        {this.signedIn() ? <Main user={this.state.user} signOut={this.signOut}/> : <Login login={this.login} />}
      </div>
    );
  }
}

export default App;

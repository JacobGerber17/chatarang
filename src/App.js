import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import Login from './Login';

class App extends Component {
  state = {
    user: {
      uid: '1',
      userName: 'bob',
      email: 'bob@gmail.com',
    }
  }

  render() {
    let isLoggedIn = false

    if(this.state.user.userName != ''){
      isLoggedIn = true
    }

    return (
      <div className="App">
        {isLoggedIn ? <Main user={this.state.user} /> : <Login />}
        
      </div>
    );
  }
}

export default App;
